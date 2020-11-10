#!/bin/bash -e

# mirror_test.sh
# gist: https://gist.github.com/lox/9152137
# benchmarks closest ubuntu mirrors and outputs them in speed order
# bash -c "$(curl -fsSL https://gist.githubusercontent.com/lox/9152137/raw/mirror_test.sh)"
# top source url: bash -c "$(curl -fsSL https://gist.githubusercontent.com/lox/9152137/raw/mirror_test.sh)" | head -n1 | awk '{ print $1 }'

RELEASE=$(lsb_release -c -s 2>/dev/null || echo 14.04)
MIRRORS=$(curl -s http://mirrors.ubuntu.com/mirrors.txt)
TESTFILE="dists/$RELEASE/main/binary-amd64/Packages.bz2"
TIMEOUT=1
SAMPLES=3
BYTES=511999 #1mb

usage() {
cat << EOF
usage: $0 options
Tests out close by mirrors and prints them in speed order
OPTIONS:
   -h      Show this message
   -s <n>  Number of samples to take (default $SAMPLES)
EOF
}

# tests the provided mirror, outputs times
function test_mirror() {
  for s in $(seq 1 $SAMPLES) ; do
    time=$(curl -r 0-$BYTES --max-time $TIMEOUT --silent --output /dev/null --write-out %{time_total} ${1}${TESTFILE})
    if [ "$TIME" == "0.000" ] ; then exit 1; fi
    echo $time
  done
}

# tests all the mirrors, outputs mirror and average time
function test_all_mirrors() {
  for MIRROR in $MIRRORS; do
    mean=$(mean $(test_mirror $MIRROR))
    if [ "$mean" != "-nan" ] ; then
       printf '%-60s %.5f\n' $MIRROR $mean
    else
       printf '%-60s failed, ignoring\n' $MIRROR 1>&2
    fi
  done;
}

# calculates the mean of all arguments
function mean() {
  len=$#
  echo $* | tr " " "\n" | sort -n | head -n $(((len+1)/2)) | tail -n 1
}

# parse arguments
while getopts "hs:" OPTION
do
  case $OPTION in
    s) SAMPLES=$OPTARG ;;
    h) usage; exit 1 ;;
    ?) usage; exit ;;
  esac
done

# print mirrors in order of time
test_all_mirrors | sort -n -k 2 | grep http | head -n1 | awk '{ print $1 }'