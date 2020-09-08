import AnchorLink from './src/link'

AnchorLink.install = function(Vue) {
  Vue.component(AnchorLink.mgName, AnchorLink)
}

export default AnchorLink
