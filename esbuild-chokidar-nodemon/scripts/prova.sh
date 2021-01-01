#!/bin/bash
echo $1
greet(){
    local name="edi"
    echo $1 $name
}
while getopts p in flag
do
    case "${flag}" in
         p) echo ${OPTARG}
    esac
done

greet "hello" -p "!"

exit 0
