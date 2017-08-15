import { Utils } from './utils'
import { RULES } from './rules'

class VueSimpleMarkdownParser {
  parse (source, options) {
    source = Utils.escapeTagStart(source)

    RULES.forEach((parser) => {
      if (options[parser.RULE_NAME] !== undefined && !options[parser.RULE_NAME]) {
        return
      }

      source = parser.parse(source)
    })

    return source
  }
}

const vueSimpleMarkdownParser = new VueSimpleMarkdownParser()
export { vueSimpleMarkdownParser as VueSimpleMarkdownParser }
