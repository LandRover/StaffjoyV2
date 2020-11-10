#!/bin/bash

set -e
set -u
set -x

export DEBIAN_FRONTEND=noninteractive
export GOPATH=${HOME}/golang
export STAFFJOY=${GOPATH}/src/v2.staffjoy.com

# Detect and replace to fastest APT mirror
sudo /bin/bash ${STAFFJOY}/vagrant/ubuntu_mirror_replace_to_fastest.sh

## apt-fast
sudo add-apt-repository ppa:apt-fast/stable < /dev/null
echo debconf apt-fast/maxdownloads string 16 | sudo debconf-set-selections
echo debconf apt-fast/dlflag boolean true | sudo debconf-set-selections
echo debconf apt-fast/aptmanager string apt | sudo debconf-set-selections

sudo apt update -y -q

sudo apt install -y -q  apt-fast
sudo apt install -y -q  build-essential bash-completion autoconf
sudo apt install -y -q  apt-transport-https ca-certificates gnupg-agent software-properties-common debconf-utils
sudo apt install -y -q  net-tools git curl dos2unix jq screen lynx mc

sudo mkdir -p ${STAFFJOY}
sudo chown -R ${USER}:${USER} ${GOPATH}

/bin/bash ${STAFFJOY}/vagrant/docker.sh
/bin/bash ${STAFFJOY}/vagrant/minikube.sh
/bin/bash ${STAFFJOY}/vagrant/golang.sh
/bin/bash ${STAFFJOY}/vagrant/node.sh
/bin/bash ${STAFFJOY}/vagrant/bazel.sh
/bin/bash ${STAFFJOY}/vagrant/protobuf.sh
/bin/bash ${STAFFJOY}/vagrant/nginx.sh
/bin/bash ${STAFFJOY}/vagrant/mysql.sh

sudo apt upgrade -y -q
sudo apt autoremove -y -q && sudo apt clean

# Alias
source ${STAFFJOY}/vagrant/helpers/alias.sh;

addAlias ~/.profile "STAFFJOY" "export STAFFJOY=${STAFFJOY}"
addAlias ~/.profile "ACCOUNT_MYSQL_CONFIG" "export ACCOUNT_MYSQL_CONFIG='mysql://root:SHIBBOLETH@tcp(10.0.0.100:3306)/account'"
addAlias ~/.profile "COMPANY_MYSQL_CONFIG" "export COMPANY_MYSQL_CONFIG='mysql://root:SHIBBOLETH@tcp(10.0.0.100:3306)/company'"

addAlias /etc/hosts "suite.local" "192.168.69.69 suite.local" "true"

addAlias ~/.bash_aliases "bazel" "alias bazel='~/.bazel/bin/bazel'"
addAlias ~/.bash_aliases "kubectl" "alias k='kubectl --namespace=development'"

# DOCKER ALIASES
# Remove all docker containers running and exited
addAlias ~/.bash_aliases "docker-rma" "alias docker-rma='__drma() { docker ps -aq "$@" | xargs -r docker rm -f; }; __drma'"

# Remove all docker images
addAlias ~/.bash_aliases "docker-rmia" "alias docker-rmia='__drmia() { docker images -q "$@" | xargs -r docker rmi -f; }; __drmia'"

# Remove all custom docker networks
addAlias ~/.bash_aliases "docker-rmnet" "alias docker-rmnet='__drmnet() { docker network ls -q -f type=custom "$@" | xargs -r docker network rm; }; __drmnet'"

# Remove all unused volumes
addAlias ~/.bash_aliases "docker-rmvol" "alias docker-rmvol='__drmvol() { docker volume ls -q "$@" | xargs -r docker volume rm; }; __drmvol'"

# Remove all docker containers and all docker images
addAlias ~/.bash_aliases "docker-rmall" "alias docker-rmall='docker-rma && docker-rmia'"

# Remove all docker containers, images, custom networks, and volumes
addAlias ~/.bash_aliases "docker-nuke" "alias docker-nuke='docker-rmall; docker-rmnet; docker-rmvol'"

# Remove only exited containers, unused images, unused networks, and unused volumes
addAlias ~/.bash_aliases "docker-clean" "alias docker-clean='docker-rma -f status=exited; docker-rmia -f dangling=true; docker-rmnet; docker-rmvol -f dangling=true'"
