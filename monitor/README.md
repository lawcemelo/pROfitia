# RO MD Monitor

Ragnarok Online の画面を監視して、キャラクター名とメモリアルダンジョンのID名を検出する補助ツールです。

## 現時点の構成

- `ro_md_monitor.py`
  - `Ragnarok` を含むウィンドウを探します。
  - 画面をキャプチャします。
  - 左上の基本情報ウィンドウからキャラクター名領域を切り出します。
  - 画面内の白い小窓を候補として拾い、メモリアルダンジョンウィンドウらしい領域を切り出します。
  - OCR結果を `character_names` / `md_id_names` と照合します。
  - 検出できた場合は `monitor/md-events.json` に追記します。

- `config.example.json`
  - 監視対象ウィンドウ名
  - OCRコマンド
  - 既知キャラクター名
  - 既知MD ID名
  - 出力先
  - キャラ名切り出し位置

## 重要な制約

このリポジトリ内のブラウザアプリだけでは、ゲーム画面を直接監視できません。
そのため、この監視ツールはブラウザとは別に動くWindows向け補助アプリとして作っています。

また、現在の同梱環境にはOCRエンジンがありません。
そのため、実運用には Tesseract OCR などをインストールし、`config.example.json` の `ocr.command` を使える状態にする必要があります。

## 実行例

Codex同梱Pythonを使う場合:

```powershell
& "C:\Users\clknf\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" monitor\ro_md_monitor.py --once
```

スクリーンショットでデバッグする場合:

```powershell
& "C:\Users\clknf\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" monitor\ro_md_monitor.py --image "D:\local_Works\20_個人\10_game\RO\Picture\ScreenShot\2026-03\Ragnarok_20260316_222356.jpg"
```

常時監視する場合:

```powershell
& "C:\Users\clknf\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" monitor\ro_md_monitor.py
```

この環境では次の起動スクリプトも使えます。

```powershell
.\monitor\start-monitor.ps1
```

起動中はローカルAPIも使えます。

```text
http://127.0.0.1:18765/health
http://127.0.0.1:18765/events
```

ブラウザアプリのMD管理タブで現在キャラを選び、`監視接続` を押すと、このAPIから検出ログを定期取得します。

ブラウザ側の `監視接続` は、監視アプリを起動するボタンではありません。
先にこの監視アプリを起動してから押してください。

## OCR設定

Tesseract を使う場合の例:

```json
{
  "ocr": {
    "command": "tesseract \"{image}\" stdout -l eng+jpn --psm 6",
    "timeout_seconds": 8
  }
}
```

`{image}` には、監視ツールが切り出した画像ファイルのパスが入ります。

## 出力イベント例

```json
[
  {
    "detectedAt": "2026-06-03T12:00:00Z",
    "characterName": "めろ・とらばー",
    "mdIdName": "Labyrinth of Phantom P",
    "source": "ro-md-monitor",
    "mdRegion": [0, 356, 202, 506],
    "raw": {
      "characterText": "...",
      "mdText": "Labyrinth of Phantom P ..."
    }
  }
]
```

## 次の実装候補

- `monitor/md-events.json` をブラウザアプリ側へ取り込むUIを追加する。
- OCR精度を見ながら、キャラ名領域やMDウィンドウ候補検出を調整する。
- Tesseract以外のOCRを使う場合は、`ocr.command` だけ差し替える。
