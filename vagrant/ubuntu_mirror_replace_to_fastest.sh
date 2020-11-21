#!/bin/bash -e

usage() {
cat << EOF
Usage: sudo $0 [mirror_url]
Example: sudo $0 http://archive.ubuntu.com/ubuntu
Replaces the apt mirror to the input mirror_url
EOF
}

# ARGS
FASTEST_MIRROR_URL=$1
if [ -z "$1" ]
then
    FASTEST_MIRROR_URL=`cd $(dirname $BASH_SOURCE); ./helpers/ubuntu_mirror_test.sh`
    echo $FASTEST_MIRROR_URL;
fi

HTTP_REGEX='(https?|ftp)://[-A-Za-z0-9\+&@#/%?=~_|!:,.;]*[-A-Za-z0-9\+&@#/%=~_|]'
if [[ ! $FASTEST_MIRROR_URL =~ $HTTP_REGEX ]]
then
    echo "Invalid mirror_url found: $FASTEST_MIRROR_URL";
    usage; exit 1;
fi

OLD_APT_SOURCE=`cat /etc/apt/sources.list | grep ^deb\ | head -n1 | cut -d\  -f2`

[ -e  /etc/apt/sources.list.orig ] || cp /etc/apt/sources.list /etc/apt/sources.list.orig

cp /etc/apt/sources.list /etc/apt/sources.list.tmp
sed "s,$OLD_APT_SOURCE,$FASTEST_MIRROR_URL," < /etc/apt/sources.list.tmp > /etc/apt/sources.list

echo "[x] Done, apt source replaced to: $FASTEST_MIRROR_URL";