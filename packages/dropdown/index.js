import { Dropdown } from 'element-ui'
import './dropdown.scss'
Dropdown.mgName = 'MgDropdown'
Dropdown.install = function(Vue) {
    Vue.component(Dropdown.mgName, Dropdown)
  }
export default Dropdown