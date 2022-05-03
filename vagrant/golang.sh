#!/bin/bash


# VERSIONS
GOLANG_VERSION=1.18.1


# PATH MAPPING
LOCAL_PATH="/usr/local";
SRC_PATH="/usr/src";


# GO PATHS
GOROOT="${LOCAL_PATH}/go";
GOPATH="~/go";


## Modify global path for this run
PATH=$PATH:${GOPATH}/bin:${GOROOT}/bin


if ! command -V go >/dev/null 2>&1; then
    GO_TAR_FILENAME="go${GOLANG_VERSION}.linux-amd64.tar.gz";

    sudo curl -o ${SRC_PATH}/${GO_TAR_FILENAME} https://dl.google.com/go/${GO_TAR_FILENAME}
    sudo tar -xvf ${SRC_PATH}/${GO_TAR_FILENAME} -C ${SRC_PATH}
    sudo mv ${SRC_PATH}/go ${LOCAL_PATH}
    sudo rm ${SRC_PATH}/${GO_TAR_FILENAME}

    # Alias
    source "$(dirname $0)/helpers/alias.sh";

    addAlias ~/.profile "GOROOT" "export GOROOT=$GOROOT"
    addAlias ~/.profile "GOPATH" "export GOPATH=$GOPATH"
    addAlias ~/.profile "\$GOPATH" "export PATH=\$PATH:\$GOPATH/bin:\$GOROOT/bin"
    addAlias ~/.profile "GO111MODULE" "export GO111MODULE=on"
fi

sudo -u ${USER} -H bash -c "
id
source ~/.profile

if ! command -V golint ; then
    go install golang.org/x/lint/golint
    go install golang.org/x/tools/cmd/cover
    go install golang.org/x/tools/cmd/goimports
fi

if ! command -V protoc-gen-go ; then 
    go install github.com/golang/protobuf/protoc-gen-go
    go install golang.org/x/tools/cmd/cover
    go install golang.org/x/tools/cmd/goimports
    go install github.com/grpc-ecosystem/grpc-gateway/...
fi

if ! command -V glide ; then
    curl 'https://raw.githubusercontent.com/Masterminds/glide.sh/master/get' | sed 's+get TAG https://glide.sh/version+TAG="v0.13.3"+g' | sh
fi

if ! command -V migrate ; then
    # https://github.com/golang-migrate/migrate
    curl -L https://packagecloud.io/golang-migrate/migrate/gpgkey | sudo apt-key add -
    echo 'deb https://packagecloud.io/golang-migrate/migrate/ubuntu/ bionic main' | sudo tee /etc/apt/sources.list.d/migrate.list
    sudo apt update -y -q
    sudo apt install -y -q  migrate
fi

if ! command -V buildifier ; then
    go install github.com/bazelbuild/buildtools/buildifier
fi

if ! command -V rice ; then
    go install github.com/GeertJohan/go.rice
    go install github.com/GeertJohan/go.rice/rice
fi

go install github.com/gogo/protobuf/...

"
