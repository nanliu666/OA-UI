import { Popover } from 'element-ui'
Popover.mgName = 'MgPopover'
Popover.install = function(Vue) {
  Vue.component(Popover.mgName, Popover)
}
export default Popover
