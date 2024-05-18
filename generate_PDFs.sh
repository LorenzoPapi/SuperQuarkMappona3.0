#!/bin/bash
npm install -g md-to-pdf
find ./content -type f | grep -i .md > MDList.txt
mkdir ./pdfs
while read p; do
    echo "$p";
    p=${p%.*}
    declare nome_file=${p##*/}
    declare percorso_file="${p/.\/content\/}";
    echo $percorso_file
    while IFS='/' read -ra SPLITTA; do
        declare local_folder='./pdfs'
        for i in $SPLITTA; do
            mkdir "$local_folder/$i"
            local_folder=$local_folder/$i
        done
    done <<< $percorso_file
    declare options=$(printf '{ "scale": 0.5, "format": "A4", "margin": "16mm 10mm 10mm 10mm", "printBackground": false, "displayHeaderFooter": true, "headerTemplate": "<div style=\\"width: 100vw;font-size:10px;text-align:center;\\"><h1>%s</h1></div>", "footerTemplate": "<div style=\\"width: 100vw;font-size:10px;text-align:center;\\"><span class=\\"pageNumber\\"></span> / <span class=\\"totalPages\\"></span></div>"}' "$nome_file")
    cat "$p".md | md-to-pdf --stylesheet ./public/index.css --document-title $nome_file --pdf-options "${options}" > "./pdfs/$percorso_file.pdf";
done < MDList.txt