import { Utils } from './../utils'
import highlightjs from 'highlightjs'

const CODE_BLOCK_REGEX = /([^```]*)``` ?(\w*)([\s\S]+?)```([^```]*)/g

export class Highlight {
  static get RULE_NAME () { return 'highlight' }

  static parse (source) {
    if (!source.match(CODE_BLOCK_REGEX)) {
      return Utils.escapeTagStart(source)
    }

    return source.replace(CODE_BLOCK_REGEX, (all, sourceBeforeCode, language, source, sourceAfterCode) => {
      source = source.replace(/^\n+|\n+$/g, '')

      if (language && highlightjs.getLanguage(language)) {
        return `${Utils.escapeTagStart(sourceBeforeCode)}<pre><code class="hljs ${language}">${Utils.escapeContent(highlightjs.highlight(language, source).value)}</code></pre>${Utils.escapeTagStart(sourceAfterCode)}`
      }

      return `${Utils.escapeTagStart(sourceBeforeCode)}<pre><code class="hljs">${Utils.escapeContent(highlightjs.highlightAuto(source).value)}</code></pre>${Utils.escapeTagStart(sourceAfterCode)}`
    })
  }
}
