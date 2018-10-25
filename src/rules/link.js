const LINK_REGEX = /\[(.+?)\]\(((?:(http[s]?|ftp):\/{2})?[\w\/\-+?#=.:]+)\)/g

export class Link {
  static get RULE_NAME () { return 'link' }

  static parse (source) {
    return source.replace(LINK_REGEX, '<a href="$2" target="_blank">$1</a>')
  }
}
