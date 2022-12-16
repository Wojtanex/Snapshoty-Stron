@echo off
color 1A
title Snapchots
goto start

:start
echo Choose a website!
set /p szukaj= 

if %szukaj% == youtube.com start other_files\youtube.bat
if %szukaj% == youtube start other_files\youtube.bat
if %szukaj% == wikipedia.com start other_files\wikipedia.bat
if %szukaj% == wikipedia start other_files\wikipedia.bat
if %szukaj% == facebook.com start other_files\facebook.bat
if %szukaj% == facebook start other_files\facebook.bat
