const LINK_REGEX = /\[(.+?)\]\(((?:(?:http[s]?|ftp):\/{2})?)([\w\/\-+?#=.:;!%&]+)\)/g
export class Link {
  static get RULE_NAME () { return 'link' }

  static parse (source) {
    return source.replace(LINK_REGEX, (match, linkName, urlProtocolDomain, urlPath) => {
      const url = urlProtocolDomain.trim() + urlPath.trim().replace(/:/g, '%3A')

      return `<a href="${url}" target="_blank">${linkName}</a>`
    })
  }
}
