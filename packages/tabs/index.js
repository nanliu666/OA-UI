import Tabs from './src/tabs'

/* istanbul ignore next */
Tabs.install = function(Vue) {
  Vue.component(Tabs.mgName, Tabs)
}

export default Tabs
