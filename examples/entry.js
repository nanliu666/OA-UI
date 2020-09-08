import Element from 'element-ui'
import hljs from 'highlight.js'
import MageUI from 'main'
import Vue from 'vue'
import VueRouter from 'vue-router'
import entry from './app'
import './assets/styles/common.scss'
import demoBlock from './components/demo-block'
import MainHeader from './components/header'
import SideNav from './components/side-nav'
import './demo-styles/index.scss'
import routes from './route.config'
Vue.use(Element)

Vue.use(VueRouter)
Vue.use(MageUI)
Vue.component('demo-block', demoBlock)
Vue.component('main-header', MainHeader)
Vue.component('side-nav', SideNav)
const router = new VueRouter({
  mode: 'hash',
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
