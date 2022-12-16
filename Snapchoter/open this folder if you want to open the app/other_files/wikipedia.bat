@echo off
title Wikipedia-Snapchots
color 1A
goto wybieranie

:wybieranie 
echo Wybierz rok!
echo.
echo 1. 2022

set /p szukaj=

if %szukaj% == 1 goto 2022


:2022
echo Wybierz miesiąc
echo.
echo 1. Grudzien

set /p szukaj1=

if %szukaj1% == 1 goto grudzien

:grudzien
echo Wybierz dzień!
echo.
echo 1. 16 Grudnia

set /p szukaj2=

if %szukaj2% == 1 start wikipediaszesnastygrudnia.html