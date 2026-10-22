@echo off
rem Commit and push wealthEdAgent (main) and net8 (master). Usage: commitboth "your commit message"
set "MSG=%~1"
if "%MSG%"=="" set "MSG=wealthEdAgent update"

cd /d c:\stash\wealthEdAgent
git status
git add -A -- . ":(exclude)*.bak*" ":(exclude)*.zip" ":(exclude).github" ":(exclude).env*"
git commit -m "%MSG%"
git push -v origin main

cd /d c:\stash\net8
git status
git add .
git commit -m "%MSG%"
git push -v origin master

cd /d c:\stash\wealthEdAgent
