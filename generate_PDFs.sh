#!/bin/bash
npm install -g md-to-pdf
find ./content -type f -not \( -path "./content/NucleiTematici/*" -o -path "./content/templates/*" \) | grep -i '.*.md$' > MDList.txt
declare root_pdf_folder="./public/pdfs"
rm -rf $root_pdf_folder
mkdir $root_pdf_folder
while read md_file; do
    md_file="${md_file%.*}"
    declare nome_file="${md_file##*/}"
    declare percorso_file="${md_file/.\/content\/}"
    
    declare local_folder=$root_pdf_folder
    readarray -d "/" -t folders <<< "$percorso_file"
    unset 'folders[${#folders[@]}-1]'
    for i in "${folders[@]}"; do
        local_folder="$local_folder/$i"
        if [ ! -d "$local_folder" ]; then
            mkdir "$local_folder"
        fi
    done
    echo "Leggendo $nome_file.md da $percorso_file verso "$local_folder/${nome_file//' '/'-'}.pdf""

    declare options=$(printf '{ "scale": 0.8, "format": "A4", "margin": "16mm 10mm 10mm 10mm", "printBackground": false, "displayHeaderFooter": true, "headerTemplate": "<div style=\\"width: 100vw;font-size:10px;text-align:center;\\"><h1>%s</h1></div>", "footerTemplate": "<div style=\\"width: 100vw;font-size:10px;text-align:center;\\"><span class=\\"pageNumber\\"></span> / <span class=\\"totalPages\\"></span></div>"}' "$nome_file")
    cat "$md_file".md | md-to-pdf --stylesheet ./public/index.css --document-title "$nome_file" --pdf-options "${options}" > "${local_folder// '-'}/${nome_file// /'-'}.pdf";
done < MDList.txt
