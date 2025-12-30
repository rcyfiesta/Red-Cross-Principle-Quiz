@echo off
REM Batch file for committing changes to GitHub repository

cd /d "%~dp0"

echo ===============================================
echo GitHub Commit Tool
echo ===============================================
echo.

REM Check if commit message is provided as argument
if "%1"=="" (
    set /p commit_message="Enter commit message: "
) else (
    set commit_message=%*
)

if "%commit_message%"=="" (
    echo Error: Commit message cannot be empty.
    pause
    exit /b 1
)

echo.
echo Staging all changes...
git add .

echo Adding commit with message: "%commit_message%"
git commit -m "%commit_message%"

if %errorlevel% neq 0 (
    echo Error: Commit failed. Make sure you have changes to commit.
    pause
    exit /b 1
)

echo.
echo Commit successful!
echo.

REM Ask if user wants to push to GitHub
set /p push_choice="Do you want to push to GitHub? (y/n): "
if /i "%push_choice%"=="y" (
    echo.
    echo Pushing to GitHub...
    git push
    if %errorlevel% equ 0 (
        echo Successfully pushed to GitHub!
    ) else (
        echo Error: Push failed.
    )
) else (
    echo Skipping push to GitHub.
)

echo.
pause
