import { DatePicker } from 'element-ui'
DatePicker.mgName = 'MgDatePicker';
DatePicker.install = function(Vue) {
  Vue.component(DatePicker.mgName, DatePicker)
};
export default DatePicker
