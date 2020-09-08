import { Button } from 'element-ui'
import './button.scss'

Button.mgName = 'MgButton'
Button.install = function(Vue) {
    Vue.component(Button.mgName, Button)
}
export default Button