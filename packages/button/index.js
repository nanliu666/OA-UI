import { Button } from 'element-ui'
import './button.scss'

Button.mgname = 'MgButton'
Button.install = function(Vue) {
    Vue.component(Button.mgname, Button)
}
export default Button