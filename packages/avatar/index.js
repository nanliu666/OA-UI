import Avatar from './src/avatar'

Avatar.install = function(Vue) {
  Vue.component(Avatar.mgName, Avatar)
}

export default Avatar
