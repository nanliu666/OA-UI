/* Automatically generated by './build/bin/build-entry.js' */


import Antd from 'ant-design-vue'
import './styles/common.less'

import Search from '../packages/search/index.js'
import Table from '../packages/table/index.js'

const components = [
    Search,
  Table
]
const install = function(Vue) {
  Vue.use(Antd)
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Antd)
  install(window.Vue)
}

export default {
  install,

}
