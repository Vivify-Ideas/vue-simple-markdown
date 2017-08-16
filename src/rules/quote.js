const QUOTE_REGEX = /^(>+)(.*)/

export class Quote {
  static get RULE_NAME () { return 'blockquote' }

  static parse (source) {
    const lines = source.split('\n')
    let inQuote = false
    let qouteNestingLevel = 0

    lines.forEach((line, index) => {
      if (QUOTE_REGEX.test(line)) {
        const match = QUOTE_REGEX.exec(line)
        const currentQuoteNestingLevel = match[1].length

        if (!inQuote) {
          if (currentQuoteNestingLevel > 1) {
            return
          }

          lines[index] = `<blockquote>${match[2]}`
          inQuote = true
          qouteNestingLevel = currentQuoteNestingLevel
        } else {
          if (currentQuoteNestingLevel > qouteNestingLevel) {
            let lineStart = ''
            const nestingLevelDifference = currentQuoteNestingLevel - qouteNestingLevel
            for (let i = 0; i < nestingLevelDifference; i++) {
              lineStart += `<blockquote>`
            }

            qouteNestingLevel = currentQuoteNestingLevel
            lines[index] = `${lineStart}${match[2]}`
          } else if (currentQuoteNestingLevel < qouteNestingLevel) {
            const lineStart = this.closeQuote(qouteNestingLevel - currentQuoteNestingLevel)
            qouteNestingLevel = currentQuoteNestingLevel
            lines[index] = `${lineStart}${match[2]}`
          } else {
            lines[index] = match[2]
          }
        }
      } else {
        if (inQuote) {
          inQuote = false
          lines[index - 1] += this.closeQuote(qouteNestingLevel)
        }
      }
    })

    if (inQuote) {
      lines[lines.length - 1] += this.closeQuote(qouteNestingLevel)
    }

    inQuote = false
    return lines.join('\n')
  }

  static closeQuote (qouteNestingLevel) {
    let closeLine = ''

    for (qouteNestingLevel; qouteNestingLevel !== 0; qouteNestingLevel--) {
      closeLine += `</blockquote>`
    }

    return closeLine
  }
}
