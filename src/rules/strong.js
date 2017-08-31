const STRONG_REGEX_1 = /(^|\s)(?:__)(.+?)(?:__)($|\s)/g
const STRONG_REGEX_2 = /(^|\s)(?:\*\*)(.+?)(?:\*\*)($|\s)/g

export class Strong {
  static get RULE_NAME () { return 'strong' }

  static parse (source) {
    source = source.replace(STRONG_REGEX_1, '$1<strong>$2</strong>$3')
    return source.replace(STRONG_REGEX_2, '$1<strong>$2</strong>$3')
  }
}
