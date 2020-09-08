import Statistic from './src/statistic'

Statistic.install = function(Vue) {
  Vue.component(Statistic.name, Statistic)
}

export default Statistic
