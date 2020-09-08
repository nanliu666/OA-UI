import { Radio } from 'element-ui'
Radio.mgname = 'MgRadio';
Radio.install = function(Vue) {
  Vue.component(Radio.mgname, Radio)
};
export default Radio
