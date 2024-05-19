// @ts-ignore: this is safe, we don't want to actually make darkmode.inline.ts a module as
// modules are automatically deferred and we don't want that to happen for critical beforeDOMLoads
// see: https://v8.dev/features/modules#defer
import pdfDownloadScript from "./scripts/pdfdownload.inline"
//import styles from "./styles/darkmode.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

const PDFDownload: QuartzComponent = ({cfg}) => {
  return (
    <div>
      <button type="button" id="pdfsave" style="background-color: transparent; border: none;">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill='var(--darkgray)'
        >
          <title>{i18n(cfg.locale).components.pdfDownload.title}</title>
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      </button>
    </div>
  )
}

PDFDownload.afterDOMLoaded = pdfDownloadScript
//PDFDownload.css = styles

export default (() => PDFDownload) satisfies QuartzComponentConstructor
