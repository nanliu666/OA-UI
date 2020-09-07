import { Submenu } from 'element-ui'
Submenu.name = 'MgSubmenu'
Submenu.componentName = 'MgSubmenu'
Submenu.install = function(Vue) {
  Vue.component(Submenu.name, Submenu)
}

export default Submenu
