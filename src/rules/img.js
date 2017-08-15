const IMG_REGEX = /!\[(.*)\]\(((?:(http[s]?|ftp)?:?\/{0,2})[\w\/\-?#=\.]+)\)/g

export class Img {
  static get RULE_NAME () { return 'images' }

  static parse (source) {
    return source.replace(IMG_REGEX, '<img alt="$1" src="$2">')
  }
}
