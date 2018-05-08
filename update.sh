#!/bin/sh
set -e
#set -x
for package in $(tnpm outdated --parseable --depth=0 | cut -d: -f4)
do
    /bin/echo "$package"
    tnpm  install "$package"
done