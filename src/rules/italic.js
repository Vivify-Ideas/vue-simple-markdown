const ITALIC_REGEX_1 = /(?:_)(.+?)(?:_)/g
const ITALIC_REGEX_2 = /(?:\*)(.+?)(?:\*)/g

export class Italic {
  static get RULE_NAME () { return 'italic' }

  static parse (source) {
    source = source.replace(ITALIC_REGEX_1, '<i>$1</i>')
    return source.replace(ITALIC_REGEX_2, '<i>$1</i>')
  }
}
