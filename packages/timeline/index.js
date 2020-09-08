import { Timeline } from 'element-ui'
Timeline.mgName = 'MgTimeline'
Timeline.install = function(Vue) {
  Vue.component(Timeline.mgName, Timeline)
}
export default Timeline
