import LazySelect from './src/lazy-select.vue'

LazySelect.install = function(Vue) {
  Vue.component(LazySelect.mgName, LazySelect)
}

export default LazySelect
