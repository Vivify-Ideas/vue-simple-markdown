const UNORDERED_LIST_REGEX = /^( *)[\*\+\-] +(.*)/
const ORDERED_LIST_REGEX = /^( *)\d+\. (.+)/

export class Lists {
  static get RULE_NAME () { return 'lists' }

  static parse (source) {
    source = this.parseList(source, UNORDERED_LIST_REGEX, 'ul')
    source = this.parseList(source, ORDERED_LIST_REGEX, 'ol')
    return source
  }

  static parseList (source, regex, tag) {
    const lines = source.split('\n')
    let inList = false
    let listNestingLevel = 0

    lines.forEach((line, index) => {
      if (regex.test(line)) {
        const match = regex.exec(line)
        const currentLineNestingLevel = match[1].length

        if (!inList) {
          if (currentLineNestingLevel > 0) {
            return
          }

          inList = true
          lines[index] = line.replace(regex, `<${tag}><li>$2`)
        } else {
          if (currentLineNestingLevel > listNestingLevel) {
            let lineStart = ''
            const nestingLevelDifference = currentLineNestingLevel - listNestingLevel

            for (let i = 0; i < nestingLevelDifference; i++) {
              lineStart += `<${tag}>`
            }

            listNestingLevel = currentLineNestingLevel
            lines[index] = line.replace(regex, lineStart + '<li>$2')
          } else if (currentLineNestingLevel < listNestingLevel) {
            const lineStart = this.closeList(listNestingLevel - currentLineNestingLevel - 1, tag)
            listNestingLevel = currentLineNestingLevel
            lines[index] = line.replace(regex, lineStart + '<li>$2')
          } else {
            lines[index] = line.replace(regex, '</li><li>$2')
          }
        }
      } else {
        if (inList) {
          inList = false
          lines[index - 1] += this.closeList(listNestingLevel, tag)
          listNestingLevel = 0
        }
      }
    })

    if (inList) {
      lines[lines.length - 1] += this.closeList(listNestingLevel, tag)
      listNestingLevel = 0
    }

    inList = false
    return lines.join('\n')
  }

  static closeList (listNestingLevel, tag) {
    let closeLine = `</li></${tag}>`

    for (listNestingLevel; listNestingLevel !== 0; listNestingLevel--) {
      closeLine += `</${tag}>`
    }
    return closeLine
  }
}

