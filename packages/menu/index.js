import { Menu } from 'element-ui'
Menu.mgName = 'MgMenu'
Menu.install = function(Vue) {
    Vue.component(Menu.mgName, Menu)
  }
export default Menu