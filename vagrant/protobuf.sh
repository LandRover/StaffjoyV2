#!/bin/bash

set -e

# VERSIONS
PROTOBUF_VERSION=3.17.1

COMPILE_FROM_SRC="${1:-false}";
COMPILE_SRC_TMP_DIR="/tmp/protobuf_src";

if $COMPILE_FROM_SRC; then
    if [ -d ${COMPILE_SRC_TMP_DIR} ]; then
        rm -rf ${COMPILE_SRC_TMP_DIR}
    fi

    mkdir ${COMPILE_SRC_TMP_DIR}
    cd ${COMPILE_SRC_TMP_DIR}

    # Subset of protobuf to have a faster setup
    curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOBUF_VERSION}/protobuf-cpp-${PROTOBUF_VERSION}.tar.gz
    tar -xvzf protobuf-cpp-${PROTOBUF_VERSION}.tar.gz
    ln -s protobuf-${PROTOBUF_VERSION} protobuf

    cd protobuf
    ./autogen.sh
    ./configure

    make
    #make check //skipping tests, as they fail on latest
    sudo make install

    # refresh shared library cache.
    sudo ldconfig

    cd ../..
    rm -rf ${COMPILE_SRC_TMP_DIR}
else
    sudo apt install -y -q  protobuf-compiler
fi
