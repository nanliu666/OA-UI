import {TimePicker} from 'element-ui'
TimePicker.mgname='MgTimePicker'
TimePicker.install = function(Vue) {
  Vue.component(TimePicker.mgname, TimePicker)
}
export default TimePicker
