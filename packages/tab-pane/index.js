import TabPane from '../tabs/src/tab-pane.vue'

/* istanbul ignore next */
TabPane.install = function(Vue) {
  Vue.component(TabPane.mgName, TabPane)
}

export default TabPane
