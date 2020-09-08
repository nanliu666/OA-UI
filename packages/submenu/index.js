import { Submenu } from 'element-ui'
Submenu.mgName = 'MgSubmenu'
Submenu.install = function(Vue) {
  Vue.component(Submenu.mgName, Submenu)
}

export default Submenu
