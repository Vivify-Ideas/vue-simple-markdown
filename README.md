# VueSimpleMarkdown

[![npm](https://img.shields.io/npm/v/vue-simple-markdown.svg)](https://www.npmjs.com/package/vue-simple-markdown) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A Simple and Highspeed Markdown Parser for Vue

## Installation

```bash
npm install --save vue-simple-markdown
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueSimpleMarkdown from 'vue-simple-markdown'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'vue-simple-markdown/dist/vue-simple-markdown.css'

Vue.use(VueSimpleMarkdown)
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<link rel="stylesheet" href="vue-simple-markdown/dist/vue-simple-markdown.css"></link>
<script src="vue-simple-markdown/dist/vue-simple-markdown.js"></script>

<!-- From CDN -->
<link rel="stylesheet" href="https://unpkg.com/vue-simple-markdown/dist/vue-simple-markdown.css"></link>
<script src="https://unpkg.com/vue-simple-markdown"></script>
```

### Syntax
```
<vue-simple-markdown :source="source"></vue-simple-markdown>
```
### Props

| Prop | Type | Default | Describe |
| ---- | ---- | ------- | ------- |
| source | String | '' | The markdown source code |
| emoji | Boolean | `true` | `:)` => `😃` |
| heading | Boolean | `true` | `#` => `<h1>`, `##` => `<h2>`... |
| highlight | Boolean | `true` | SyntaxHighlighter ([highlightjs](https://www.npmjs.com/package/highlightjs)) |
| horizontal-line | Boolean | `true` | `***` or `___` or `---` => `<hr />` |
| image | Boolean | `true` | `![imageName.png](imageLocation)` |
| inline-code | Boolean | `true` | \`someCode\` => `someCode` |
| italic | Boolean | `true` | `*text*` or `_text_` => *text* |
| linkify | Boolean | `true` | Autoconvert URL-like text to link |
| link | Boolean | `true` | `[Github](https://github.com/)` => [Github](https://github.com/) |
| lists | Boolean | `true` | Lists, see [here](#lists) |
| strong | Boolean | `true` | `**text**` or `__text__` => __text__ |
| blockqoute | Boolean | `true` | Blockqoutes, see [here](#blockqoutes) |
| prerender | Function | `(source) => return { source }` | Function executed before rendering process |
| postrender | Function | `(html) => { return html }` | Function executed after rendering process |

### Lists
#### Unordered list
Start list with characters `*`, `+` or `-`
Number of spaces before that characte => nesting level
```
* First nesting level
 * Second nesting level
   * Third nesting level
          * Tenth nesting level
   * Again third nesting level
```
#### Ordered list
Start list with number and dot. At example `1.`
Number of spaces before that characte => nesting level
```
1. First nesting level
 1. Second nesting level
   1. Third nesting level
          1. Tenth nesting level
   2. Again third nesting level
```

## Blockqoutes
```
> First nesting level
>> Second nesting level
>>> Third nesting level
>>>>>>>>>> Tenth nesting level
>>> Again third nesting level
```

## Development

### Launch visual tests

```bash
npm run dev
```

### Launch Karma with coverage

```bash
npm run dev:coverage
```

### Build

Bundle the js and css of to the `dist` folder:

```bash
npm run build
```


## Publishing

The `prepublish` hook will ensure dist files are created before publishing. This
way you don't need to commit them in your repository.

```bash
# Bump the version first
# It'll also commit it and create a tag
npm version
# Push the bumped package and tags
git push --follow-tags
# Ship it 🚀
npm publish
```

## License

[MIT](http://opensource.org/licenses/MIT)
