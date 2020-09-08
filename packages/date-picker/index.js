import { DatePicker } from 'element-ui'
DatePicker.name = 'MgDatePicker';
DatePicker.install = function(Vue) {
  Vue.component(DatePicker.name, DatePicker)
};
export default DatePicker
