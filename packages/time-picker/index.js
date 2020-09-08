import {TimePicker} from 'element-ui'
TimePicker.mgName='MgTimePicker'
TimePicker.install = function(Vue) {
  Vue.component(TimePicker.mgName, TimePicker)
}
export default TimePicker
