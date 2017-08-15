import { Utils } from './../utils'

const INLINE_CODE_REGEX = /`(.+?)`/g

export class InlineCode {
  static get RULE_NAME () { return 'inlineCode' }

  static parse (source) {
    return source.replace(INLINE_CODE_REGEX, (all, content) => {
      return `<code class="vue-simple-markdown__inline-code">${Utils.escapeContent(content)}</code>`
    })
  }
}
