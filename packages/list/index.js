import List from './src/list'

List.install = function(Vue) {
  Vue.component(List.mgName, List)
}

export default List
