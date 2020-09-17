import {Badge} from 'element-ui'
Badge.mgName = 'MgBadge'
/* istanbul ignore next */
Badge.install = function(Vue) {
  Vue.component(Badge.mgName, Badge)
}

export default Badge
