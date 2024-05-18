// TESTA DI DOWN LO HAI AGGIUNTO A TUTTO IL DOCUMENTO COGLIONAZZOOOOOO (AHAHAHAHAHAHAHAHAH)
// import * as jspdf from 'jspdf';
// import html2canvas from 'html2canvas';

async function savePDF(this : HTMLElement) {
  // var data = document.getElementsByTagName('article')[0]
  // html2canvas(data).then(canvas => {  
  //   // Few necessary setting options
  //   let imgWidth = 208;   
  //   let pageHeight = 295;    
  //   let imgHeight = canvas.height * imgWidth / canvas.width;  
  //   let heightLeft = imgHeight;  

  //   const contentDataURL = canvas.toDataURL('image/png')
  //   let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
  //   let position = 0;  
  //   pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
  //   pdf.save('MYPdf.pdf'); // Generated PDF   
  // });
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
    var link = document.createElement('a')
    link.href = `./../pdfs/${fileName}`
    link.download = fileName
    link.click()
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