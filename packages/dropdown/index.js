import { Dropdown } from 'element-ui'
Dropdown.name = 'MgDropdown'
Dropdown.install = function(Vue) {
    Vue.component(Dropdown.name, Dropdown)
  }
export default Dropdown