from __future__ import annotations

import argparse
import ctypes
import ctypes.wintypes
import hashlib
import json
import re
import subprocess
import threading
import time
from dataclasses import dataclass
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any

import numpy as np
from PIL import Image, ImageGrab, ImageOps


DEFAULT_CONFIG = {
    "window_title_keyword": "Ragnarok",
    "interval_seconds": 3.0,
    "cooldown_seconds": 600,
    "server": {"host": "127.0.0.1", "port": 18765},
    "output_events_path": "monitor/md-events.json",
    "debug_dir": "monitor/debug",
    "character_names": [],
    "md_id_names": [],
    "ocr": {
        "command": "",
        "timeout_seconds": 8,
    },
    "capture": {
        "character_region": {"x": 0, "y": 44, "width": 230, "height": 52},
    },
}


@dataclass
class WindowInfo:
    hwnd: int
    title: str
    rect: tuple[int, int, int, int]


@dataclass
class Detection:
    character_name: str
    md_id_name: str
    character_text: str
    md_text: str
    md_region: tuple[int, int, int, int] | None


STATUS_LOCK = threading.Lock()
MONITOR_STATUS: dict[str, Any] = {
    "lastScanAt": "",
    "lastDetectionAt": "",
    "lastError": "",
    "candidateCount": 0,
    "candidates": [],
    "characterName": "",
    "characterText": "",
    "detectedMdIdName": "",
    "written": False,
}


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")


def update_status(**values: Any) -> None:
    with STATUS_LOCK:
        MONITOR_STATUS.update(values)


def get_status() -> dict[str, Any]:
    with STATUS_LOCK:
        return dict(MONITOR_STATUS)


def deep_merge(base: dict[str, Any], override: dict[str, Any]) -> dict[str, Any]:
    result = dict(base)
    for key, value in override.items():
        if isinstance(value, dict) and isinstance(result.get(key), dict):
            result[key] = deep_merge(result[key], value)
        else:
            result[key] = value
    return result


def load_config(path: Path) -> dict[str, Any]:
    if not path.exists():
        return DEFAULT_CONFIG
    return deep_merge(DEFAULT_CONFIG, json.loads(path.read_text(encoding="utf-8")))


def enum_windows(keyword: str) -> list[WindowInfo]:
    user32 = ctypes.windll.user32
    windows: list[WindowInfo] = []

    @ctypes.WINFUNCTYPE(ctypes.c_bool, ctypes.c_void_p, ctypes.c_void_p)
    def callback(hwnd: int, _lparam: int) -> bool:
        if not user32.IsWindowVisible(hwnd):
            return True
        if user32.IsIconic(hwnd):
            return True
        length = user32.GetWindowTextLengthW(hwnd)
        if length <= 0:
            return True
        buffer = ctypes.create_unicode_buffer(length + 1)
        user32.GetWindowTextW(hwnd, buffer, length + 1)
        title = buffer.value
        if keyword.lower() not in title.lower():
            return True
        rect = ctypes.wintypes.RECT()
        user32.GetWindowRect(hwnd, ctypes.byref(rect))
        if rect.right <= rect.left or rect.bottom <= rect.top:
            return True
        if rect.right - rect.left < 400 or rect.bottom - rect.top < 300:
            return True
        windows.append(WindowInfo(hwnd, title, (rect.left, rect.top, rect.right, rect.bottom)))
        return True

    user32.EnumWindows(callback, 0)
    return windows


def capture_window(keyword: str) -> tuple[Image.Image, WindowInfo]:
    windows = enum_windows(keyword)
    if not windows:
        raise RuntimeError(f'window not found: "{keyword}"')
    window = max(windows, key=lambda item: (item.rect[2] - item.rect[0]) * (item.rect[3] - item.rect[1]))
    return ImageGrab.grab(bbox=window.rect).convert("RGB"), window


def crop_region(image: Image.Image, region: dict[str, int]) -> Image.Image:
    x = int(region.get("x", 0))
    y = int(region.get("y", 0))
    width = int(region.get("width", image.width))
    height = int(region.get("height", image.height))
    box = clamp_box((x, y, x + width, y + height), image.size)
    if not box:
        raise RuntimeError(f"capture region is outside image: region={region}, image={image.size}")
    return image.crop(box)


def clamp_box(box: tuple[int, int, int, int], size: tuple[int, int]) -> tuple[int, int, int, int] | None:
    width, height = size
    left = max(0, min(width, int(box[0])))
    top = max(0, min(height, int(box[1])))
    right = max(0, min(width, int(box[2])))
    bottom = max(0, min(height, int(box[3])))
    if right <= left or bottom <= top:
        return None
    return (left, top, right, bottom)


def preprocess_for_ocr(image: Image.Image) -> Image.Image:
    gray = ImageOps.grayscale(image)
    scaled = gray.resize((gray.width * 3, gray.height * 3), Image.Resampling.LANCZOS)
    return ImageOps.autocontrast(scaled)


def run_ocr(image: Image.Image, config: dict[str, Any], debug_path: Path) -> str:
    command_template = str(config.get("ocr", {}).get("command", "")).strip()
    debug_path.parent.mkdir(parents=True, exist_ok=True)
    processed = preprocess_for_ocr(image)
    processed.save(debug_path)
    if not command_template:
        return ""
    command = resolve_ocr_command(command_template).format(image=str(debug_path))
    completed = subprocess.run(
        command,
        shell=True,
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
        timeout=float(config.get("ocr", {}).get("timeout_seconds", 8)),
    )
    if completed.returncode != 0:
        return ""
    return completed.stdout.strip()


def resolve_ocr_command(command_template: str) -> str:
    if not command_template.lower().startswith("tesseract "):
        return command_template
    for path in (
        Path("C:/Program Files/Tesseract-OCR/tesseract.exe"),
        Path("C:/Program Files (x86)/Tesseract-OCR/tesseract.exe"),
    ):
        if path.exists():
            return f'"{path}"{command_template[len("tesseract"):]}'
    return command_template


def find_light_components(image: Image.Image) -> list[tuple[int, int, int, int]]:
    rgb = np.asarray(image.convert("RGB"))
    # ROの小窓本文は白地が多いため、白い矩形の連結成分から候補を拾う。
    mask = (rgb[:, :, 0] > 230) & (rgb[:, :, 1] > 230) & (rgb[:, :, 2] > 230)
    step = 2
    small = mask[::step, ::step]
    height, width = small.shape
    visited = np.zeros_like(small, dtype=bool)
    components: list[tuple[int, int, int, int]] = []

    for sy in range(height):
        for sx in range(width):
            if visited[sy, sx] or not small[sy, sx]:
                continue
            stack = [(sx, sy)]
            visited[sy, sx] = True
            min_x = max_x = sx
            min_y = max_y = sy
            area = 0
            while stack:
                x, y = stack.pop()
                area += 1
                min_x = min(min_x, x)
                max_x = max(max_x, x)
                min_y = min(min_y, y)
                max_y = max(max_y, y)
                for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
                    if nx < 0 or ny < 0 or nx >= width or ny >= height:
                        continue
                    if visited[ny, nx] or not small[ny, nx]:
                        continue
                    visited[ny, nx] = True
                    stack.append((nx, ny))

            x1, y1, x2, y2 = min_x * step, min_y * step, (max_x + 1) * step, (max_y + 1) * step
            comp_w = x2 - x1
            comp_h = y2 - y1
            if area < 500 or comp_w < 110 or comp_h < 35:
                continue
            if comp_w > image.width * 0.45 or comp_h > image.height * 0.4:
                continue
            components.append((x1, y1, x2, y2))
    return components


def candidate_md_windows(image: Image.Image) -> list[tuple[int, int, int, int]]:
    candidates: list[tuple[int, int, int, int]] = []
    for x1, y1, x2, y2 in find_light_components(image):
        # 本文白地からタイトルバー分だけ上に広げる。
        region = clamp_box((x1 - 4, y1 - 28, x2 + 4, y2 + 4), image.size)
        if not region:
            continue
        w = region[2] - region[0]
        h = region[3] - region[1]
        if 120 <= w <= 420 and 70 <= h <= 260:
            candidates.append(region)
    candidates.sort(key=lambda rect: (rect[1], rect[0]))
    return candidates[:8]


def best_match(text: str, candidates: list[str]) -> str:
    normalized = " ".join(text.split()).lower()
    for candidate in candidates:
        if candidate.lower() in normalized:
            return candidate
    return ""


def clean_md_id(value: str) -> str:
    cleaned = value.strip()
    cleaned = re.sub(r"^[\[\(\{<\s]+", "", cleaned)
    cleaned = re.sub(r"[\]\)\}>.\s]+$", "", cleaned)
    cleaned = re.sub(r"\s+", " ", cleaned)
    if cleaned[:1] in {"D", "f"} and len(cleaned) > 2 and cleaned[1].islower():
        # Tesseract often reads the opening "[" in RO's MD line as a letter.
        cleaned = cleaned[1:].strip()
    return cleaned


def extract_md_id(text: str, candidates: list[str]) -> str:
    matched = best_match(text, candidates)
    if matched:
        return matched

    for raw_line in text.splitlines():
        line = " ".join(raw_line.split())
        if not line or "進行" not in line:
            continue
        bracketed = re.search(r"\[([^\]]{3,100})\]", line)
        if bracketed:
            md_id = clean_md_id(bracketed.group(1))
            if md_id:
                return md_id
        before_progress = line.split("進行", 1)[0]
        if "]" in before_progress:
            before_progress = before_progress.rsplit("]", 1)[0]
        md_id = clean_md_id(before_progress)
        if re.search(r"[A-Za-z0-9]", md_id) and 3 <= len(md_id) <= 100:
            return md_id
    return ""


def detect(image: Image.Image, config: dict[str, Any], debug_dir: Path) -> Detection | None:
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    character_crop = crop_region(image, config["capture"]["character_region"])
    character_text = run_ocr(character_crop, config, debug_dir / f"{timestamp}_character.png")
    character_name = best_match(character_text, list(config.get("character_names", [])))

    best_md_id = ""
    best_md_text = ""
    best_region: tuple[int, int, int, int] | None = None
    candidate_statuses: list[dict[str, Any]] = []
    md_candidates = list(config.get("md_id_names", []))
    for index, region in enumerate(candidate_md_windows(image)):
        safe_region = clamp_box(region, image.size)
        if not safe_region:
            continue
        crop = image.crop(safe_region)
        md_text = run_ocr(crop, config, debug_dir / f"{timestamp}_md_candidate_{index}.png")
        md_id = extract_md_id(md_text, md_candidates)
        candidate_statuses.append({
            "region": safe_region,
            "mdIdName": md_id,
            "text": " ".join(md_text.split())[:220],
        })
        if md_id:
            best_md_id = md_id
            best_md_text = md_text
            best_region = safe_region
            break

    update_status(
        lastScanAt=utc_now_iso(),
        lastError="",
        candidateCount=len(candidate_statuses),
        candidates=candidate_statuses,
        characterName=character_name,
        characterText=" ".join(character_text.split())[:220],
        detectedMdIdName=best_md_id,
        written=False,
    )

    if not character_name and config.get("character_names"):
        character_name = ""
    if not best_md_id:
        return None
    return Detection(character_name, best_md_id, character_text, best_md_text, best_region)


def load_events(path: Path) -> list[dict[str, Any]]:
    if not path.exists():
        return []
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
        return data if isinstance(data, list) else []
    except json.JSONDecodeError:
        return []


def append_event(path: Path, detection: Detection, cooldown_seconds: float) -> bool:
    events = load_events(path)
    now = datetime.now(timezone.utc)
    for event in reversed(events[-50:]):
        if event.get("characterName") != detection.character_name:
            continue
        if event.get("mdIdName") != detection.md_id_name:
            continue
        detected_at = event.get("detectedAt")
        if not detected_at:
            continue
        previous = datetime.fromisoformat(detected_at.replace("Z", "+00:00"))
        if (now - previous).total_seconds() < cooldown_seconds:
            update_status(lastDetectionAt=utc_now_iso(), written=False)
            return False

    event_id = hashlib.sha1(f"{detection.character_name}|{detection.md_id_name}|{now.isoformat()}".encode("utf-8")).hexdigest()[:16]
    event = {
        "id": event_id,
        "detectedAt": now.isoformat().replace("+00:00", "Z"),
        "characterName": detection.character_name,
        "mdIdName": detection.md_id_name,
        "source": "ro-md-monitor",
        "mdRegion": detection.md_region,
        "raw": {
            "characterText": detection.character_text,
            "mdText": detection.md_text,
        },
    }
    events.append(event)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(events, ensure_ascii=False, indent=2), encoding="utf-8")
    update_status(lastDetectionAt=event["detectedAt"], written=True)
    return True


def normalize_event_ids(path: Path) -> None:
    events = load_events(path)
    changed = False
    for index, event in enumerate(events):
        if event.get("id"):
            continue
        seed = f"{event.get('characterName', '')}|{event.get('mdIdName', '')}|{event.get('detectedAt', '')}|{index}"
        event["id"] = hashlib.sha1(seed.encode("utf-8")).hexdigest()[:16]
        changed = True
    if changed:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(json.dumps(events, ensure_ascii=False, indent=2), encoding="utf-8")


def make_handler(config: dict[str, Any]):
    output_path = Path(config["output_events_path"])

    class MonitorHandler(BaseHTTPRequestHandler):
        def do_OPTIONS(self) -> None:
            self.send_response(204)
            self.write_headers()

        def do_GET(self) -> None:
            if self.path.startswith("/health"):
                self.write_json({"ok": True, "service": "ro-md-monitor"})
                return
            if self.path.startswith("/events"):
                normalize_event_ids(output_path)
                self.write_json({"events": load_events(output_path), "status": get_status()})
                return
            if self.path.startswith("/status"):
                self.write_json({"status": get_status()})
                return
            self.send_response(404)
            self.write_headers()
            self.wfile.write(b"not found")

        def write_headers(self) -> None:
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
            self.send_header("Access-Control-Allow-Headers", "Content-Type")
            self.end_headers()

        def write_json(self, data: dict[str, Any]) -> None:
            body = json.dumps(data, ensure_ascii=False).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.write_headers()
            self.wfile.write(body)

        def log_message(self, _format: str, *_args: Any) -> None:
            return

    return MonitorHandler


def start_server(config: dict[str, Any]) -> ThreadingHTTPServer:
    server_config = config.get("server", {})
    host = str(server_config.get("host", "127.0.0.1"))
    port = int(server_config.get("port", 18765))
    server = ThreadingHTTPServer((host, port), make_handler(config))
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    print(f"server: http://{host}:{port}")
    return server


def run_once(config: dict[str, Any], image_path: Path | None) -> int:
    debug_dir = Path(config["debug_dir"])
    if image_path:
        image = Image.open(image_path).convert("RGB")
        window = None
    else:
        image, window = capture_window(config["window_title_keyword"])
    detection = detect(image, config, debug_dir)
    if not detection:
        print("not detected")
        print(f"debug crops: {debug_dir}")
        return 2
    written = append_event(Path(config["output_events_path"]), detection, float(config["cooldown_seconds"]))
    print(json.dumps({
        "written": written,
        "characterName": detection.character_name,
        "mdIdName": detection.md_id_name,
        "mdRegion": detection.md_region,
        "window": window.title if window else str(image_path),
    }, ensure_ascii=False, indent=2))
    return 0


def run_loop(config: dict[str, Any]) -> int:
    start_server(config)
    while True:
        try:
            run_once(config, None)
        except Exception as error:
            update_status(lastScanAt=utc_now_iso(), lastError=str(error), detectedMdIdName="", written=False)
            print(f"error: {error}")
        time.sleep(float(config["interval_seconds"]))


def main() -> int:
    parser = argparse.ArgumentParser(description="Ragnarok Online MD monitor")
    parser.add_argument("--config", default="monitor/config.example.json")
    parser.add_argument("--image", help="screenshot path for debug detection")
    parser.add_argument("--once", action="store_true")
    args = parser.parse_args()

    config = load_config(Path(args.config))
    if args.once or args.image:
        return run_once(config, Path(args.image) if args.image else None)
    return run_loop(config)


if __name__ == "__main__":
    raise SystemExit(main())
