import LazySelect from './src/lazy-select.vue'

LazySelect.install = function(Vue) {
  Vue.component(LazySelect.name, LazySelect)
}

export default LazySelect
