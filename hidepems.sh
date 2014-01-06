#! /bin/bash
for files in $(find node_modules -name '*.pem' -or -name '*.pem')
do
 mv "$files" "${files%.pem}.pemx"
done
