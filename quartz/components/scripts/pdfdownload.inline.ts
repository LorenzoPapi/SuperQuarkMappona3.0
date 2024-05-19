async function savePDF(this : HTMLElement) {
  const contentIndexPath = "/static/contentIndex.json"
  const fetchData = fetch(contentIndexPath).then(data => data.json())
  
  const data = await fetchData
  console.log(Object.keys(data))

  var fileName : string = ''
  Object.keys(data).forEach((el) => {
    if (decodeURI(location.href).includes(el)) {
      fileName = el
      return
    }
  })
  if (fileName) {
    var link = document.createElement('a')
    link.href = `/pdfs/${fileName}.pdf`
    link.download = fileName.split('/').slice(-1)[0]
    link.click()
  } else console.log('ERRORE')
}

function setupSavePDF(this: HTMLElement) {
  const save = document.getElementById("pdfsave")
  if (save) {
    save.addEventListener("click", savePDF)
    //BOH perora funziona anche senza questo
    //window.addCleanup(() => save.removeEventListener("click", savePDF))
  }
}

window.addEventListener("load", setupSavePDF)