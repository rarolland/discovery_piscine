#!/bin/bash

for i in "$@"
	do
		i=$1
		mkdir ex$1
		shift 1
done
