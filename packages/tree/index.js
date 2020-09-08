import Tree from './src/tree'

Tree.install = function(Vue) {
  Vue.component(Tree.mgName, Tree)
}

export default Tree
export { Tree }
