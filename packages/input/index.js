import { Input } from 'element-ui'
Input.mgName = 'MgInput'
Input.install = function(Vue) {
  Vue.component(Input.mgName, Input)
}
export default Input
