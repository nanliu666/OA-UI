import TreeSelect from './src/tree-select'

TreeSelect.install = function(Vue) {
  Vue.component(TreeSelect.mgName, TreeSelect)
}

export default TreeSelect
export { TreeSelect }
