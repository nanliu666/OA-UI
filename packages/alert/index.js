import { Alert } from 'element-ui'
import './alert.scss'

Alert.mgName = 'MgAlert'

Alert.install = function(Vue) {
  Vue.component(Alert.mgName, Alert)
}

export default Alert
