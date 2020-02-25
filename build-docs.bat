@echo off
call npm i
call npm audit fix
call npm run docs
pause