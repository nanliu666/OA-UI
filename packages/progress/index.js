

import Progress from './src/progress.vue';
Progress.mgName = 'MgProgress'
Progress.install = function(Vue) {
  Vue.component(Progress.mgName, Progress)
}
export default Progress

