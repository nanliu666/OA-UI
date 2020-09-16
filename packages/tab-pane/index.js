import { TabPane } from 'element-ui'
TabPane.mgName = 'MgTabPane'
TabPane.install = function(Vue) {
  Vue.component(TabPane.mgName, TabPane)
}

export default TabPane

