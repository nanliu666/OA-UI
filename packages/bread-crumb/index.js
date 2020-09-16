import Breadcrumb from './src/bread-crumb'

Breadcrumb.install = function(Vue) {
  Vue.component(Breadcrumb.mgName, Breadcrumb)
}

export default Breadcrumb
export { Breadcrumb }
