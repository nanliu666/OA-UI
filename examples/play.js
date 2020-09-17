import Vue from 'vue'
import App from './play/index.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/lib/style'

Vue.use(Antd)
new Vue({
  // eslint-disable-line
  render: (h) => h(App)
}).$mount('#app')
