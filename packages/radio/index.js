import { Radio } from 'element-ui'
Radio.mgName = 'MgRadio'
Radio.install = function(Vue) {
  Vue.component(Radio.mgName, Radio)
}
export default Radio
