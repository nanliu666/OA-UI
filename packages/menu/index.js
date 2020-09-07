import { Menu } from 'element-ui'
Menu.name = 'MgMenu'
Menu.install = function(Vue) {
    Vue.component(Menu.name, Menu)
  }
export default Menu