#!/bin/bash

SERVICE="$1";
VERSION="$2";
NAMESPACE="${3:-development}";

DEPLOYMENT_CONFIG_PATH="/tmp/k8s/deployments/";
SERVICES_PATH="./ci/k8s/${NAMESPACE}/services";
DEPLOYMENTS_PATH="./ci/k8s/${NAMESPACE}/deployments";

function usage {
    if [ ! -z "$1" ]; then
        echo $1;
        echo "";
    fi

    echo "USAGE: $0 <service> <version> [namespace]";
    echo "";
    echo "<service> - Name of the service to deploy";
    echo "<version> - version of build to deploy";
    echo "[namespace] - if empty, default namespace will be ${NAMESPACE}";
    echo "";

    exit ${E_BADARGS};
}

## validation inputs
[[ -z "${SERVICE}" || -z "${VERSION}" || -z "${NAMESPACE}" ]] && usage;

echo "[v] Starting deployment for service ${SERVICE} version ${VERSION}"

# Create or update service
echo "[v] Checking if k8s service for ${SERVICE} exists..."
kubectl get service ${SERVICE}-service --namespace=${NAMESPACE} 2>&1 >/dev/null

if [ $? -ne 0 ]
then
  echo "[v] K8s service for ${SERVICE} doesn't exist.  Creating service..."
  kubectl --namespace=${NAMESPACE} create -f ${SERVICES_PATH}/${SERVICE}.yaml
else
  echo "[v] K8s service for ${SERVICE} exists "
  # TODO - removing --force causes spec.clusterIP: Invalid value: "": field is immutable
  kubectl --namespace=${NAMESPACE} replace -f ${SERVICES_PATH}/${SERVICE}.yaml --force
fi

[ ! -d ${DEPLOYMENT_CONFIG_PATH} ] && mkdir -p ${DEPLOYMENT_CONFIG_PATH}

echo "[v] Copying service ${SERVICE} yaml template to ${DEPLOYMENT_CONFIG_PATH}"
cp ${DEPLOYMENTS_PATH}/${SERVICE}.yaml ${DEPLOYMENT_CONFIG_PATH}/${SERVICE}-copy.yaml

echo "[v] Modifing service ${SERVICE} yaml version to ${VERSION}"
sed -i "s/VERSION/${VERSION}/g" ${DEPLOYMENT_CONFIG_PATH}/${SERVICE}-copy.yaml

echo "[v] Checking if deployment for ${SERVICE} exists..."
kubectl get deployment ${SERVICE}-deployment --namespace=${NAMESPACE} 2>&1 >/dev/null
if [ $? -eq 0 ]
then
  echo "[v] Deployment for ${SERVICE} exists, updating container image to version ${VERSION}"
  kubectl --namespace=${NAMESPACE} apply -f ${DEPLOYMENT_CONFIG_PATH}/${SERVICE}-copy.yaml
else
  echo "[v] Deployment for ${SERVICE} doesn't exist, creating deployment with container image version ${VERSION}"
  kubectl --namespace=${NAMESPACE} create -f ${DEPLOYMENT_CONFIG_PATH}/${SERVICE}-copy.yaml
fi
echo "[v] Finished deploying ${SERVICE}, version ${VERSION} to ${NAMESPACE}."

rm ${DEPLOYMENT_CONFIG_PATH}/${SERVICE}-copy.yaml
