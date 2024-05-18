// TESTA DI DOWN LO HAI AGGIUNTO A TUTTO IL DOCUMENTO COGLIONAZZOOOOOO (AHAHAHAHAHAHAHAHAH)
async function savePDF(this : HTMLElement) {
  const contentIndexPath = "/static/contentIndex.json"
  const fetchData = fetch(contentIndexPath).then(data => data.json())
  
  const data = await fetchData
  console.log(Object.keys(data))

  var fileName = null
  Object.keys(data).forEach((el) => {
    //console.log(el, decodeURI(location.href))
    if (decodeURI(location.href).includes(el)) {
      console.log("BINGO")
      fileName = el
      return
    }
  })
  if (fileName) {
    console.log(fileName)
    //const pdf = ;//{path: `/content/${fileName}`}

    //if (pdf) fs.writeFileSync("test.pdf", pdf.content)
  } else console.log('ERROR')
}

function setupSavePDF(this: HTMLElement) {
  const save = document.getElementById("pdfsave")
  console.log("CARICO")
  if (save) {
    save.addEventListener("click", savePDF)
    //BOH perora funziona anche senza questo
    //window.addCleanup(() => save.removeEventListener("click", savePDF))
  }
}

window.addEventListener("load", setupSavePDF)