import Vue from 'vue'
import Antd from 'ant-design-vue'
import MageUI from '@'
import hljs from 'highlight.js'
import VueRouter from 'vue-router'
import entry from './app'
import './assets/styles/common.less'
import './demo-styles/index.less'
import demoBlock from './components/demo-block'
import MainHeader from './components/header'
import SideNav from './components/side-nav'
import routes from './route.config'

import '../src/styles/common.less'
Vue.use(Antd)
Vue.use(VueRouter)
Vue.use(MageUI)
Vue.component('demo-block', demoBlock)
Vue.component('main-header', MainHeader)
Vue.component('side-nav', SideNav)
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

router.afterEach(() => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})
// eslint-disable-next-line
new Vue({ el: '#app', render: (h) => h(entry), router })
