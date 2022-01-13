#!/bin/bash

RUBY_VERSION="3.0.0";

if ! command -V rvm >/dev/null 2>&1; then
    curl -sSL https://rvm.io/mpapis.asc | gpg --import -
    curl -sSL https://rvm.io/pkuczynski.asc | gpg --import -

    curl -sSL https://get.rvm.io | bash -s stable
    
    source ~/.bashrc
fi

rvm --version

rvm install ruby ${RUBY_VERSION}

rvm use ${RUBY_VERSION}
rvm use ${RUBY_VERSION} --default

ruby -v
