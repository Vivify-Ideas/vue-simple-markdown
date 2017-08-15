import { Utils } from './../utils'
import highlightjs from 'highlightjs'

const CODE_BLOCK_REGEX = /``` ?(\w*)([\s\S]+?)```/g

export class Highlight {
  static get RULE_NAME () { return 'highlight' }

  static parse (source) {
    return source.replace(CODE_BLOCK_REGEX, (all, language, source) => {
      source = source.replace(/^\n+|\n+$/g, '')

      if (language && highlightjs.getLanguage(language)) {
        return `<pre><code class="hljs ${language}">${Utils.escapeContent(highlightjs.highlight(language, source).value)}</code></pre>`
      }

      return `<pre><code class="hljs">${Utils.escapeContent(highlightjs.highlightAuto(source).value)}</code></pre>`
    })
  }
}
