import { Tag } from 'element-ui'
Tag.mgName = 'MgTag'
Tag.install = function(Vue) {
  Vue.component(Tag.mgName, Tag)
}
export default Tag
