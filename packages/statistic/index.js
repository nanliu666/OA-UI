import Statistic from './src/statistic'

Statistic.install = function(Vue) {
  Vue.component(Statistic.mgName, Statistic)
}

export default Statistic
