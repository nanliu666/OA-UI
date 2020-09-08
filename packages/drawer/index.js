import { Drawer } from 'element-ui'
Drawer.mgName = 'MgDrawer'
Drawer.install = function(Vue) {
  Vue.component(Drawer.mgName, Drawer)
}

export default Drawer
