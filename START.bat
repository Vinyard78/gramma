@echo off

start cmd /k call scripts/launchDev.bat
start cmd /k call scripts/launchMongodb.bat

call "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" "http://localhost:3000"
call "C:\Users\Luck\AppData\Local\MongoDBCompassCommunity\MongoDBCompassCommunity.exe"

REM lance une invite avec node activee et direct dans le repertoire du projet 
start cmd /k call scripts/launchNodejs.bat