import { Steps } from 'element-ui'
Steps.mgName = 'MgSteps'
Steps.install = function(Vue) {
  Vue.component(Steps.mgName, Steps)
}
export default Steps
