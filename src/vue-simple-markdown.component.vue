<template>
  <div class="vue-simple-markdown markdown-body" v-html="parsed"></div>
</template>

<script>
import { VueSimpleMarkdownParser } from './vue-simple-markdown-parser.js'

export default {
  name: 'vue-simple-markdown',
  props: {
    source: {
      type: [String, Number],
      default: ''
    },
    prerender: {
      type: Function,
      default: (source) => { return source }
    },
    postrender: {
      type: Function,
      default: (html) => { return html }
    },
    emoji: {
      type: Boolean,
      default: true
    },
    heading: {
      type: Boolean,
      default: true
    },
    highlight: {
      type: Boolean,
      default: true
    },
    horizontalLine: {
      type: Boolean,
      default: true
    },
    image: {
      type: Boolean,
      default: true
    },
    inlineCode: {
      type: Boolean,
      default: true
    },
    italic: {
      type: Boolean,
      default: true
    },
    link: {
      type: Boolean,
      default: true
    },
    linkify: {
      type: Boolean,
      default: true
    },
    lists: {
      type: Boolean,
      default: true
    },
    strong: {
      type: Boolean,
      default: true
    },
    blockquote: {
      type: Boolean,
      default: true
    },
    table: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    parsed () {
      let source = this.prerender(this.source.toString())

      source = VueSimpleMarkdownParser.parse(source, {
        emoji: this.emoji,
        heading: this.heading,
        highlight: this.highlight,
        horizontalLine: this.horizontalLine,
        image: this.image,
        inlineCode: this.inlineCode,
        italic: this.italic,
        link: this.link,
        linkify: this.linkify,
        lists: this.lists,
        strong: this.strong,
        blockquote: this.blockquote,
        table: this.table
      })

      return this.postrender(source)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~github-markdown-css/github-markdown.css';

.vue-simple-markdown {
  white-space: pre-wrap;
}
</style>
