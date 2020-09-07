import { Select } from 'element-ui'
Select.name = 'MgSelect';
Select.install = function(Vue) {
  Vue.component(Select.name, Select)
};
export default Select
