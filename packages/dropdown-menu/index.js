import { DropdownMenu } from 'element-ui'
DropdownMenu.mgName = 'MgDropdownMenu'
DropdownMenu.install = function(Vue) {
    Vue.component(DropdownMenu.mgName, DropdownMenu)
  }
export default DropdownMenu