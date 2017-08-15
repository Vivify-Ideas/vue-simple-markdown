const HEADINGS_REGEX = /^(#{1,6}) (.+)$/

export class Heading {
  static get RULE_NAME () { return 'heading' }

  static parse (source) {
    const lines = source.split('\n')
    lines.forEach((line, index, lines) => {
      if (HEADINGS_REGEX.test(line)) {
        const match = HEADINGS_REGEX.exec(line)
        lines[index] = line.replace(HEADINGS_REGEX, '<h' + match[1].length + '>$2</h' + match[1].length + '>')
      }
    })

    return lines.join('\n')
  }
}
