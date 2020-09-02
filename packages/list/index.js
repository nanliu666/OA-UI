import List from './src/list'

List.install = function(Vue) {
  Vue.component(List.name, List)
}

export default List
