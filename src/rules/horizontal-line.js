const HORIZONTAL_LINE_REGEX = /^(\*{3}|_{3}|-{3})$/

export class HorizontalLine {
  static get RULE_NAME () { return 'horizontalLine' }

  static parse (source) {
    const lines = source.split('\n')
    lines.forEach((line, index, lines) => {
      lines[index] = line.replace(HORIZONTAL_LINE_REGEX, '<hr />')
    })

    return lines.join('\n')
  }
}
