import { Button } from 'element-ui'
import './button.scss'

Button.name = 'MgButton'
Button.install = function(Vue) {
    Vue.component(Button.name, Button)
}
export default Button