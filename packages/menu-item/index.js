import { MenuItem } from 'element-ui'
MenuItem.mgName = 'MgMenuItem'
MenuItem.install = function(Vue) {
    Vue.component(MenuItem.mgName, MenuItem)
  }
export default MenuItem