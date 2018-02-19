@echo off 

REM Launch mongodb for myapp
TITLE = MongoDB 
cd "C:\Program Files\MongoDB\Server\3.6\bin"
mongod.exe --dbpath D:\Perso\Projets\gramma\data\db