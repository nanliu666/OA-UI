import { Select } from 'element-ui'
Select.mgName = 'MgSelect';
Select.install = function(Vue) {
  Vue.component(Select.mgName, Select)
};
export default Select
