import Popconfirm from './src/popconfirm'

Popconfirm.install = function(Vue) {
  Vue.component(Popconfirm.mgName, Popconfirm)
}

export default Popconfirm
