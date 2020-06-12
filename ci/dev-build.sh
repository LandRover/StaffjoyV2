#!/bin/bash

set -e
set -u
set -x

# This script is called by `make dev-build`
VERSION="dev-$(date +%s)";
NAMESPACE="development";

declare -a targets=("www" "faraday" "account/api" "account/server" "email/server" "myaccount" "whoami" "company/server" "company/api" "ical" "superpowers" "sms/server" "bot/server" "app")

echo "Running database migration"
migrate -database=${ACCOUNT_MYSQL_CONFIG} -path=${STAFFJOY}/account/migrations/ up
migrate -database=${COMPANY_MYSQL_CONFIG} -path=${STAFFJOY}/company/migrations/ up

## now loop through the above array
for TARGET in "${targets[@]}"
do
    # Remove slashes from service
    SERVICE=$(echo ${TARGET} | sed 's/\///g')

    # Run the build and upload to GKE
    /home/vagrant/.bazel/bin/bazel run //${TARGET}:docker
    
    # Tag so we can track the deploy in Kubernetes
    # (bazel converts slash to an underscore)
    docker tag bazel/$(echo ${TARGET}):docker localhost:5000/${SERVICE}:${VERSION}
    docker push localhost:5000/${SERVICE}:${VERSION}

    # Deploy service to Kubernetes
    ./ci/deploy-service.sh ${SERVICE} ${VERSION} ${NAMESPACE};
done

echo "Finished deploying version ${VERSION} - check the status at http://kubernetes.staffjoy-v2.local";
