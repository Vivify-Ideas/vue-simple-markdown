const ITALIC_REGEX_1 = /(^|\s|"|')(?:_)(.+?)(?:_)/g
const ITALIC_REGEX_2 = /(^|\s|"|')(?:\*)(.+?)(?:\*)/g

export class Italic {
  static get RULE_NAME () { return 'italic' }

  static parse (source) {
    source = source.replace(ITALIC_REGEX_1, '$1<i>$2</i>')
    return source.replace(ITALIC_REGEX_2, '$1<i>$2</i>')
  }
}
