#!/bin/bash

# VERSIONS
KUBECTL_CLI_VERSION=v1.18.10
MINIKUBE_VERSION=v1.14.2

# ARGS
FORCE_UPDATE=false
for arg in "$@"
do
    case $arg in
        -f|--force)
            FORCE_UPDATE=true
            shift # Remove --force from processing
        ;;
    esac
done


## DEPS
sudo apt install -y -q  conntrack


# We need to run a local registry - k8s cannot just pull locally
if ! pgrep -c registry >/dev/null 2>&1 ; then
	if ! command -V docker >/dev/null 2>&1; then
		echo "docker NOT installed."
	fi

    docker run -d \
        -p 5000:5000 \
        --restart=always \
        --name registry \
        registry:2
fi


$FORCE_UPDATE && [ -f /usr/local/bin/minikube ] && minikube delete && echo "[x] Force update flag used. Uninstalling minikube and all files";
$FORCE_UPDATE && [ -f /usr/local/bin/minikube ] && sudo minikube delete && sudo rm -rf /usr/local/bin/minikube && echo "[x] Force update flag used. Removing existing version of minikube";
$FORCE_UPDATE && [ -f /usr/local/bin/kubectl ] && sudo rm -rf /usr/local/bin/kubectl && echo "[x] Force update flag used. Removing existing version of kubectl";


# download and install kubectl ...
# Latest stable: https://github.com/kubernetes/kubernetes/releases | https://storage.googleapis.com/kubernetes-release/release/stable.txt
if [ ! -f "/usr/local/bin/kubectl" ] ; then
    echo "[x] Downloading kubectl ${KUBECTL_CLI_VERSION}...";
    curl -Lo kubectl https://storage.googleapis.com/kubernetes-release/release/${KUBECTL_CLI_VERSION}/bin/linux/amd64/kubectl && sudo mv kubectl /usr/local/bin/ && sudo chmod +x /usr/local/bin/kubectl && sudo chown root:root /usr/local/bin/kubectl;
fi


# ... and minikube
# Latest stable: https://github.com/kubernetes/minikube/releases
if [ ! -f "/usr/local/bin/minikube" ] ; then
    echo "[x] Downloading minikube ${MINIKUBE_VERSION}...";
    curl -Lo minikube https://storage.googleapis.com/minikube/releases/${MINIKUBE_VERSION}/minikube-linux-amd64 && sudo mv minikube /usr/local/bin/ && sudo chmod +x /usr/local/bin/minikube && sudo chown root:root /usr/local/bin/minikube;
fi


# Clean temp stuff.
sudo rm -rf /tmp/juju* /tmp/minikube*;


# Start minikube instance
sudo -E minikube start \
    --kubernetes-version=${KUBECTL_CLI_VERSION} \
    --vm-driver=none \
    --bootstrapper=kubeadm \
    --dns-domain="cluster.local" \
    --service-cluster-ip-range="10.0.0.0/12" \
    --extra-config="kubelet.cluster-dns=10.0.0.10" \
    --v=99;


# enables dashboard
sudo -E minikube addons enable dashboard
sudo -E minikube dashboard &>/dev/null &


# either use sudo on all kubectl commands, or chown/chgrp to your user
sudo chown -R ${USER} ${HOME}/.kube ${HOME}/.minikube


# this will write over any previous configuration)
# wait for the cluster to become ready/accessible via kubectl
echo -e -n " [ ] Waiting for master components to start...";
JSONPATH='{range .items[*]}{@.metadata.name}:{range @.status.conditions[*]}{@.type}={@.status};{end}{end}';
until kubectl get nodes -o jsonpath="$JSONPATH" 2>&1 | grep -q "Ready=True"; do
    echo -n ".";
    sleep 1;
done


kubectl cluster-info

kubectl config set-cluster staffjoy-dev --server=https://10.0.2.15:8443 --certificate-authority=/home/${USER}/.minikube/ca.crt
kubectl config set-context staffjoy-dev --cluster=staffjoy-dev --user=minikube
kubectl config use-context staffjoy-dev

kubectl create namespace development

kubectl --namespace=development create -R -f ~/golang/src/v2.staffjoy.com/ci/k8s/development/infrastructure/app-mysql

kubectl --context minikube proxy &>/dev/null &
