import {TimePicker} from 'element-ui'
TimePicker.name='MgTimePicker'
TimePicker.install = function(Vue) {
  Vue.component(TimePicker.name, TimePicker)
}
export default TimePicker
