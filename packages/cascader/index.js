import { Cascader } from 'element-ui'
Cascader.mgName = 'MgCascader'
Cascader.install = function(Vue) {
  Vue.component(Cascader.mgName, Cascader)
}
export default Cascader
