#!/bin/bash

if ! command -V npm >/dev/null 2>&1; then
    curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
    sudo apt install -q -y  nodejs

    # Alias
    source "$(dirname $0)/helpers/alias.sh";

    addAlias ~/.profile "node_modules" "export PATH=\$PATH:node_modules/.bin"
fi
