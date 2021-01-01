#!/bin/bash

function create-component(){
    FILE="$1.tsx"
    mkdir -p $1
    cd $1
    echo $1 > ${FILE^}
}
while getopts c: flag
do
    case "${flag}" in
        c) create-component ${OPTARG};;
    esac
done

exit 0