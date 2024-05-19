async function savePDF(this : HTMLElement) {
  // Questa cosa penso sia la peggiore che abbia mai fatto
  // nella mia carriera da programmatore inesperto
  // hardcodeare qualcosa che
  // funziona in production
  // ma
  // andrà in errore in dev mode
  // cosa sto facendo della mia vita
  const devMode = false
  const prefix = devMode ? "" : "/SuperQuarkMappona3.0"
  const contentIndexPath = `${prefix}/static/contentIndex.json`
  const fetchData = fetch(contentIndexPath).then(data => data.json())
  
  const data = await fetchData
  
  var fileName : string = ''
  Object.keys(data).forEach((el) => {
    if (decodeURI(location.href).includes(el)) {
      fileName = el
      return
    }
  })
  if (fileName) {
    var link = document.createElement('a')
    link.href = `${prefix}/pdfs/${fileName}.pdf`
    link.download = fileName.split('/').slice(-1)[0]
    link.click()
  } else console.log('ERRORE file non trovato')
}

function setupSavePDF(this: HTMLElement) {
  const save = document.getElementById("pdfsave")
  if (save) {
    save.addEventListener("click", savePDF)
    window.addCleanup(() => save.removeEventListener("click", savePDF))
  }
}

window.addEventListener("load", setupSavePDF)
document.addEventListener("nav", setupSavePDF)