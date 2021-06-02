#!/bin/bash


# VERSIONS
GOLANG_VERSION=1.16.4


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

    sudo curl -o ${SRC_PATH}/${GO_TAR_FILENAME} https://storage.googleapis.com/golang/${GO_TAR_FILENAME}
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
    go get -u golang.org/x/lint/golint
    go get -u golang.org/x/tools/cmd/cover
    go get -u golang.org/x/tools/cmd/goimports
fi

if ! command -V protoc-gen-go ; then 
    go get -u github.com/golang/protobuf/protoc-gen-go
    go get -u golang.org/x/tools/cmd/cover
    go get -u golang.org/x/tools/cmd/goimports
    go get -u github.com/grpc-ecosystem/grpc-gateway/...
fi

if ! command -V glide ; then
    curl https://glide.sh/get | sh
fi

if ! command -V migrate ; then
    # https://github.com/golang-migrate/migrate
    curl -L https://packagecloud.io/golang-migrate/migrate/gpgkey | sudo apt-key add -
    echo 'deb https://packagecloud.io/golang-migrate/migrate/ubuntu/ bionic main' | sudo tee /etc/apt/sources.list.d/migrate.list
    sudo apt update -y -q
    sudo apt install -y -q  migrate
fi

if ! command -V buildifier ; then
    go get github.com/bazelbuild/buildtools/buildifier
fi

if ! command -V rice ; then
    go get -u github.com/GeertJohan/go.rice
    go get -u github.com/GeertJohan/go.rice/rice
fi

go get -u github.com/gogo/protobuf/...

# used for local filesystem watching
if ! command -V modd ; then
    go get github.com/cortesi/modd/cmd/modd
fi
"
