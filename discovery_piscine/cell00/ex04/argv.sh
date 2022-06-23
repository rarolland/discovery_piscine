#!/bin/bash

if [ $# = 0 ]; then
 echo "No arguments supplied"
fi
for i in "$@"
    do
        i=$1
        shift 1
echo $i
done
