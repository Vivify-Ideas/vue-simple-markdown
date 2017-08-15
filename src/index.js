import VueSimpleMarkdown from './vue-simple-markdown.component.vue'

function plugin (Vue) {
  Vue.component('vue-simple-markdown', VueSimpleMarkdown)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  VueSimpleMarkdown,
  version
}
