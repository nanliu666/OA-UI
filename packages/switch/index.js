import Switch from './src/switch.vue'
Switch.mgName = 'MgSwitch'
Switch.install = function(Vue) {
  Vue.component(Switch.mgName, Switch)
}
export default Switch
