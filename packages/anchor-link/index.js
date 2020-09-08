import AnchorLink from './src/link'

AnchorLink.install = function(Vue) {
  Vue.component(AnchorLink.name, AnchorLink)
}

export default AnchorLink
