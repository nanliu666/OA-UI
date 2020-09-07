import Vue from 'vue'
import App from './play/index.vue'
import MageUI from 'main'
import Element from 'element-ui'

Vue.use(Element)
Vue.use(MageUI)
new Vue({
  // eslint-disable-line
  render: (h) => h(App)
}).$mount('#app')
