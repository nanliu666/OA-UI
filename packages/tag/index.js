import { Tag } from 'element-ui'
Tag.name = 'MgTag'
Tag.install = function(Vue) {
  Vue.component(Tag.name, Tag)
}
export default Tag
