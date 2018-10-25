import { Utils } from './../utils'

const IMG_REGEX = /!\[(.*)\]\(((?:(http[s]?|ftp)?:?\/{0,2})[\w\/\-+?#=.:]+)\)/g

export class Img {
  static get RULE_NAME () { return 'images' }

  static parse (source) {
    return source.replace(IMG_REGEX, (match, alt, src) => {
      return `<img alt="${Utils.escapeQuote(alt)}" src="${src}">`
    })
  }
}
