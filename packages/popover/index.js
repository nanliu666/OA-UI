import { Popover } from "element-ui"
Popover.name = "MgPopover"
Popover.install = function(Vue) {
  Vue.component(Popover.name, Popover)
}
export default Popover
