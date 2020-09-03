import { Dropdown } from 'element-ui'
console.log('Dropdown==', Dropdown)
Dropdown.name = 'MgDropdown'
Dropdown.install = function(Vue) {
    Vue.component(Dropdown.name, Dropdown)
  }
export default Dropdown