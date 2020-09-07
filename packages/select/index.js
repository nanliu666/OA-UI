import { Select } from 'element-ui'
Select.name = 'MgDatePicker';
Select.install = function(Vue) {
  Vue.component(Select.name, Select)
};
export default Select
