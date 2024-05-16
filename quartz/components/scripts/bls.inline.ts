function toggleBls(this: HTMLElement) {
  this.classList.toggle("collapsed")
  const content = this.nextElementSibling as HTMLElement | undefined
  if (!content) return
  content.classList.toggle("collapsed")
  content.style.maxHeight = content.style.maxHeight === "0px" ? content.scrollHeight + "px" : "0px"
}

function setupBls(this: HTMLElement) {
    const bls = document.getElementById("bls")
    if (bls) {
      const collapsed = bls.classList.contains("collapsed")
      const content = bls.nextElementSibling as HTMLElement | undefined
      if (!content) return
      content.style.maxHeight = collapsed ? "0px" : content.scrollHeight + "px"
      bls.addEventListener("click", toggleBls)
      window.addCleanup(() => bls.removeEventListener("click", toggleBls))
    }
}

window.addEventListener("load", setupBls)