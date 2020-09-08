import { Tooltip } from 'element-ui'
Tooltip.mgName = 'MgTooltip'
Tooltip.install = function(Vue) {
    Vue.component(Tooltip.mgName, Tooltip)
  }
export default Tooltip