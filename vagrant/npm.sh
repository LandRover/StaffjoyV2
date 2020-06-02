#!/bin/bash
if ! command -V npm >/dev/null 2>&1; then
    curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
    sudo apt install -q -y  nodejs
    
    if grep -Fxq "node_modules" ~/.profile ; then
        echo "export PATH=\$PATH:node_modules/.bin" | tee -a ~/.profile

        echo "[v] .profile path node_modules/.bin added.";
    else
        echo "[v] .profile path node_modules/.bin already exists";
    fi
fi