const TABLE_REGEX = /(\|[^\r\n]*\|)\r?\n(\|(?::?[-]+:?\|)+)\r?\n((?:\|[^\r\n]*\|\r?\n)*)/g

export class Table {
  static get RULE_NAME () { return 'table' }

  static parse (source) {
    return source.replace(TABLE_REGEX, (table, headers, columnAlignments, dataRows) => {
      headers = headers.slice(1, -1).split('|')

      columnAlignments = columnAlignments
        .slice(1, -1)
        .split('|')
        .map(col => {
          let alignment = ''
          if (col.startsWith(':')) {
            alignment = 'left'
          }
          if (col.endsWith(':')) {
            alignment = 'right'
          }
          if (col.startsWith(':') && col.endsWith(':')) {
            alignment = 'center'
          }

          return alignment ? ` align="${alignment}"` : ''
        })

      if (columnAlignments.length !== headers.length) {
        return table
      }

      dataRows = dataRows ? dataRows.trim().split('\n') : []
      dataRows = dataRows.map(row => row.trim().slice(1, -1).split('|'))

      const tableHeaderHtml = headers
        .map((header, columnIndex) => `<th${columnAlignments[columnIndex]}> ${header.trim()} </th>`)
        .join('')

      const tableRowsHtml = dataRows.map(dataRow => {
        const cells = []
        for (let column = 0; column < headers.length; column++) {
          cells.push(
            `<td${columnAlignments[column]}> ${dataRow[column] ? dataRow[column].trim() : ''} </td>`
          )
        }
        return `<tr> ${cells.join('\n')} </tr>`
      })
      return `<table><thead><tr> ${tableHeaderHtml} </tr></thead><tbody> ${tableRowsHtml.join(
        '\n'
      )} </tbody></table>`
    })
  }
}
