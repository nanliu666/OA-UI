import { MenuItemGroup } from 'element-ui'
MenuItemGroup.mgName = 'MgMenuItemGroup'
MenuItemGroup.install = function(Vue) {
    Vue.component(MenuItemGroup.mgName, MenuItemGroup)
  }
export default MenuItemGroup