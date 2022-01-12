#!/bin/bash

[ "$0" = "${BASH_SOURCE}" ] && echo "FILE CAN ONLY BE SOURCED, DIRECT EXECUTION IS NOT ALLOWED!" && exit 0;

addAlias () {
    local FILENAME=$1;
    local MATCH_PATTREN=$2;
    local CMD_EXPORT=$3;
    local SUDO=${4:-false};

    if ! grep -q "${MATCH_PATTREN}" "${FILENAME}" ; then
        if [[ "$SUDO" == "true" ]]; then
            echo "${CMD_EXPORT}" | sudo tee -a ${FILENAME}
        else
            echo "${CMD_EXPORT}" | tee -a ${FILENAME}
        fi

        echo "[v] ${FILENAME} path ${MATCH_PATTREN} added.";
    else
        echo "[v] ${FILENAME} path ${MATCH_PATTREN} already exists";
    fi
}
