import Anchor from './src/anchor'

Anchor.install = function(Vue) {
  Vue.component(Anchor.mgName, Anchor)
}

export default Anchor
