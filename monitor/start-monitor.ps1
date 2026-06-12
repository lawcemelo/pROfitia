$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$bundledPython = "C:\Users\clknf\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"

if (Test-Path $bundledPython) {
  $python = $bundledPython
} elseif (Get-Command py -ErrorAction SilentlyContinue) {
  $python = "py"
} elseif (Get-Command python -ErrorAction SilentlyContinue) {
  $python = "python"
} else {
  throw "Python was not found."
}

Set-Location $root
& $python "monitor\ro_md_monitor.py"
