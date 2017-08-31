const LINK_REGEX = /(^|\s|>)((?:http(?:s)?:\/\/.)(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&//=]*))/g

export class Linkify {
  static get RULE_NAME () { return 'linkify' }

  static parse (source) {
    return source.replace(LINK_REGEX, (all, before, url) => {
      url = url.trim()

      const href = url.substr(0, 4) !== 'http' ? `http://${url}` : url

      return `${before}<a href="${href}" target="_blank">${url}</a>`
    })
  }
}
