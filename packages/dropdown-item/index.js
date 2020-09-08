import { DropdownItem } from 'element-ui'
DropdownItem.mgName = 'MgDropdownItem'
DropdownItem.install = function(Vue) {
    Vue.component(DropdownItem.mgName, DropdownItem)
  }
export default DropdownItem