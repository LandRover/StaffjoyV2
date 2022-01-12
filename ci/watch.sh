#!/bin/bash
set -e
set -u
set -x

echo "[v] Make sure it runs on the HOST machine (above vagrant).";

if ! command -V vagrant >/dev/null 2>&1; then
    echo "OOPS! Run this command OUTSIDE of vagrant so that we can watch the file system better."
    exit 1
fi

if ! command -V gow >/dev/null 2>&1; then
    echo "Oops - please install `gow` on your host machine"
    echo "https://github.com/mitranim/gow"
    exit 1
fi

gow -e=go,mod,html run .