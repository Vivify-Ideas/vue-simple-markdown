import NodeEmoji from 'node-emoji'

const SHORTCUTS = {
  angry: ['>:(', '>:-('],
  blush: [':")', ':-")'],
  broken_heart: ['</3', '<\\3'],
  confused: [':/', ':-/', ':\\', ':-\\'],
  cry: [":'(", ":'-(", ':,(', ':,-('],
  frowning: [':(', ':-('],
  heart: ['<3'],
  imp: [']:(', ']:-('],
  innocent: ['o:)', 'O:)', 'o:-)', 'O:-)', '0:)', '0:-)'],
  joy: [":')", ":'-)", ':,)', ':,-)', ":'D", ":'-D", ':,D', ':,-D'],
  kissing: [':*', ':-*'],
  laughing: ['x-)', 'X-)'],
  neutral_face: [':|', ':-|'],
  open_mouth: [':o', ':-o', ':O', ':-O'],
  rage: [':@', ':-@'],
  smile: [':D', ':-D'],
  smiley: [':)', ':-)'],
  smiling_imp: [']:)', ']:-)'],
  sob: [":,'(", ":,'-(", ';(', ';-('],
  stuck_out_tongue: [':P', ':-P'],
  sunglasses: ['8-)', 'B-)'],
  sweat: [',:(', ',:-('],
  sweat_smile: [',:)', ',:-)'],
  unamused: [':s', ':-S', ':z', ':-Z', ':$', ':-$'],
  wink: [';)', ';-)']
}

export class Emoji {
  static get RULE_NAME () { return 'emoji' }

  static parse (source) {
    for (const emoji in SHORTCUTS) {
      SHORTCUTS[emoji].forEach((shortcut) => {
        shortcut = shortcut.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
        let regex = `(^|\\s)${shortcut}(?![\\w\\/])`
        regex = new RegExp(regex, 'g')

        source = source.replace(regex, (all, before) => {
          return `${before}:${emoji}:`
        })
      })
    }

    return NodeEmoji.emojify(source)
  }
}
