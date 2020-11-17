#!/bin/bash

NODE_VERSION="12";

if ! command -V node >/dev/null 2>&1; then
    curl -sL https://deb.nodesource.com/setup_${NODE_VERSION}.x | sudo -E bash -
    sudo apt install -q -y  nodejs

    # Alias
    source "$(dirname $0)/helpers/alias.sh";

    addAlias ~/.profile "node_modules" "export PATH=\$PATH:node_modules/.bin"
fi

# dev packages
echo "[v] Installing npm global packages for development...";
sudo npm install -g  yarn npm-check-updates
