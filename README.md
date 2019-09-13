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
| blockquote | Boolean | `true` | Blockquotes, see [here](#blockquotes) |
| table | Boolean | `true` | Tables, see [here](#tables) |
| prerender | Function | `(source) => return { source }` | Function executed before rendering process |
| postrender | Function | `(html) => { return html }` | Function executed after rendering process |

### Lists
#### Unordered list

Start list with characters `*`, `+` or `-`  
Number of spaces before that character => nesting level

```
* First nesting level
 * Second nesting level
   * Third nesting level
          * Tenth nesting level
   * Again third nesting level
```
#### Ordered list

Start list with number and dot. At example `1.`  
Number of spaces before that character => nesting level

```
1. First nesting level
 1. Second nesting level
   1. Third nesting level
          1. Tenth nesting level
   2. Again third nesting level
```

### Blockquotes
```
> First nesting level
>> Second nesting level
>>> Third nesting level
>>>>>>>>>> Tenth nesting level
>>> Again third nesting level
```

### Tables
A table is an arrangement of data with rows and columns, consisting of a single header row, a delimiter row separating the header from the data, and zero or more data rows.
Each row must start and end with pipes (`|`) and it consists of cells containing arbitrary text, in which inlines are parsed, separated by pipes (`|`). Spaces between pipes and cell content are trimmed. Block-level elements cannot be inserted in a table.
Example:
```
| Foo | Bar |
|-----|-----|
| Bam | Baz |
```
| Foo | Bar |
|-----|-----|
| Baz | Bim |

You can use colon (`:`) in the delimiter row to determine content alignment of the corresponding column.
Example:
```
| Align left | Align Right | Align Center | Default |
|:-----------|-:|:---:|--|
| Some text| Some text | Some | alignment |
| aligned to|  aligned to | text |
| the left side| the right side| in the center |
```
| Align left | Align Right | Align Center | Default |
|:-----------|-:|:---:|--|
| Some text| Some text | Some | alignment |
| aligned to|  aligned to | text |
| the left side| the right side| in the center |

Number of columns in each row in the body of the table may vary.
Example:
```
| Column A | Column B | Column C |
|-|-|-|
| You can have | | empty cells |
| This row | is too short |
| This row | has | too many | cells |
```
| Column A | Column B | Column C |
|-|-|-|
| You can have | | empty cells |
| This row | is too short |
| This row | has | too many | cells |


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
