@echo off
setlocal
title RO MD Monitor

cd /d "%~dp0"

echo Starting RO MD Monitor...
echo.
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0monitor\start-monitor.ps1"

echo.
echo RO MD Monitor stopped.
pause
