import { TimelineItem } from 'element-ui'
TimelineItem.mgName = 'MgTimelineItem'
TimelineItem.install = function(Vue) {
  Vue.component(TimelineItem.mgName, TimelineItem)
}
export default TimelineItem
