#! /bin/bash
for files in $(find node_modules -name '*.pemx' -or -name '*.pemx')
do
 mv "$files" "${files%.pemx}.pem"
done
