export class Utils {
  static escapeContent (source) {
    return source.replace(/\*|_|-|#|`/gm, (s) => {
      return `&#${s.charCodeAt(0)};`
    })
  }

  static escapeTagStart (source) {
    return source.replace(/\</g, '&lt;')
  }

  static escapeQuote (source) {
    return source.replace(/"/g, '&quot;')
  }
}
