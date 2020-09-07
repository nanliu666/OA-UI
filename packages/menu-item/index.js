import { MenuItem } from 'element-ui'
MenuItem.name = 'MgMenuItem'
MenuItem.install = function(Vue) {
    Vue.component(MenuItem.name, MenuItem)
  }
export default MenuItem