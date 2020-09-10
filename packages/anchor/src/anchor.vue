<template>
  <div class="mg-anchor">
    <ul class="mg-anchor-ul">
      <div class="mg-anchor-ink">
        <span
          class="mg-anchor-ink-ball"
          :class="{ visibile: ballVisibile }"
          :style="{ top: ballTop + 'px' }"
        />
      </div>
      <a
        v-for="(item, index) in anchorLinks"
        :key="index"
        class="mg-anchor-link"
        :class="{ 'mg-anchor-link-active': currentLink === index && showActiveLink }"
        :href="currentAnchor"
        :title="item.title"
        @click.prevent="goAnchor(item.href)"
      >{{ item.label }}</a>
    </ul>
    <slot />
  </div>
</template>
<script>
import { throttle } from '../../../src/utils/util'
const STATIS_BALL_HEIGHT = 9 //为什么是9？因为一个link高度为30px，12为ball的高度，所以值为15 - （12/2）= 9
const STATIS_HEIGHT = 30 //因为一个link高度为30px
const STATIS_TOP = 100 // 距离至目标位置100左右进行跳转
const cubic = (value) => Math.pow(value, 3)
const easeInOutCubic = (value) =>
  value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2
export default {
  mgName: 'MgAnchor',
  name: 'MgAnchor',
  props: {
    anchorLinks: {
      type: Array,
      default: function() {
        return []
      }
    },
    target: {
      type: [String],
      default: ''
    }
  },
  data() {
    return {
      showActiveLink: false,
      currentLink: 0,
      ballVisibile: false,
      windowHref: window.location.href,
      currentAnchor: '',
      el: null,
      container: null,
      ballTop: STATIS_BALL_HEIGHT
    }
  },
  mounted() {
    this.init()
    this.throttledScrollHandler = throttle(this.onScroll, 100)
    this.container.addEventListener('scroll', this.throttledScrollHandler)
  },
  beforeDestroy() {
    this.container.removeEventListener('scroll', this.throttledScrollHandler)
  },
  methods: {
    onScroll() {
      this.isVisibile()
      this.handleBallMove()
    },
    handleBallMove() {
      if (this.anchorLinks.length === 0) return
      this.anchorLinks.map((item, index) => {
        if (this.el.scrollTop + STATIS_TOP >= item.offsetTop) {
          if (this.currentLink !== index) {
            this.setBallIndex(index)
          }
        }
      })
      // 上移到第一个位置的时候，设置到第一个节点
      if (this.el.scrollTop <= this.anchorLinks[0].offsetTop) {
        this.setBallIndex(0)
      }
      // 最底
      if (this.el.scrollTop + this.el.clientHeight >= this.el.scrollHeight) {
        this.setBallIndex(this.anchorLinks.length - 1)
      }
    },
    // 设置小球位置以及活动的link
    setBallIndex(index) {
      this.ballTop = index * STATIS_HEIGHT + STATIS_BALL_HEIGHT
      this.currentLink = index
    },
    // 小球以及激活的link的显示与隐藏
    isVisibile() {
      this.ballVisibile = this.el.scrollTop > 0 ? true : false
      this.showActiveLink = this.el.scrollTop > 0 ? true : false
    },
    // 设置location的hash值，方便刷新的时候重定位，不存在也是可以滚动的
    setHash(data) {
      // 兼容浏览器页面hash模式（非history模式）
      let hashArray = this.windowHref.split('#')
      // 以下处理皆为使location.hash只存在一个，如http://localhost:8085/#/component/anchor#href4
      if (this.getCharCount(this.windowHref, '#') >= 2) {
        this.spliceArray(hashArray, data, 2)
      } else {
        // 只有一个#号的时候
        if (hashArray.length === 1) {
          this.currentAnchor = `${this.windowHref}#${data}`
        } else {
          this.spliceArray(hashArray, data, 1)
        }
      }
      window.location.href = this.currentAnchor
    },
    // 切分hash字符串，并设置当前锚点
    spliceArray(hashArray, data, spliceIndex) {
      hashArray.splice(spliceIndex)
      this.currentAnchor = `${hashArray.join('#')}#${data}`
    },
    // 获取某个字符出现的次数
    getCharCount(str, char) {
      var regex = new RegExp(char, 'g') // 使用g表示整个字符串都要匹配
      var result = str.match(regex) //match方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
      var count = !result ? 0 : result.length
      return count
    },
    // 点击跳转函数，scrollTo原理：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTo
    goAnchor(data) {
      const el = this.el
      const targetValue = document.querySelector(`#${data}`).offsetTop
      let scrollOptions = {
        top: targetValue,
        behavior: 'smooth'
      }
      el.scrollTo(scrollOptions)
      setTimeout(() => {
        this.setHash(data)
      }, 300)
      // 以下为使用Cubic动画函数设置scrollTop的高度
      // this.setHash(data)
      // const beginTime = Date.now()
      // const beginValue = this.el.scrollTop
      // const rAF = window.requestAnimationFrame || ((func) => setTimeout(func, 16))
      // const frameFunc = () => {
      //   const progress = (Date.now() - beginTime) / 500
      //   if (progress < 1) {
      //     let cubicMath = easeInOutCubic(progress)
      //     if (targetValue > beginValue) {
      //       el.scrollTop = beginValue + Math.abs(targetValue - beginValue) * cubicMath
      //     } else {
      //       el.scrollTop = beginValue - Math.abs(targetValue - beginValue) * cubicMath
      //     }
      //     rAF(frameFunc)
      //   } else {
      //     el.scrollTop = targetValue
      //   }
      // }
      // rAF(frameFunc)
    },
    // 初始化设置包裹容器、ball以及激活link的显示
    init() {
      this.container = document
      this.el = document.documentElement
      if (this.target) {
        this.el = document.querySelector(this.target)
        if (!this.el) {
          throw new Error(`target is not existed: ${this.target}`)
        }
        this.container = this.el
      }
      this.anchorLinks.map((item) => {
        item.offsetTop = document.querySelector(`#${item.href}`).offsetTop
      })
      this.isVisibile()
    }
  }
}
</script>

<style lang="scss" scoped>
.mg-anchor {
  .mg-anchor-ul {
    padding: 0px 5px 0px 15px;
    z-index: 9999;
    position: fixed;
    right: 40px;
    top: 120px;
    .mg-anchor-ink {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      &::before {
        position: relative;
        display: block;
        width: 2px;
        height: 100%;
        margin: 0 auto;
        background-color: #e3e7e9;
        content: ' ';
      }
      .mg-anchor-ink-ball {
        position: absolute;
        left: 50%;
        display: none;
        width: 8px;
        height: 8px;
        background-color: #fff;
        border: 2px solid #1890ff;
        border-radius: 8px;
        transform: translateX(-50%);
        transition: top 0.3s ease-in-out;
      }
      .visibile {
        display: inline-block;
      }
    }
    .mg-anchor-link {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      display: block;
    }
    .mg-anchor-link-active {
      color: #1890ff;
      font-weight: 700;
    }
    .mg-anchor-link-title {
      position: relative;
      display: block;
      margin-bottom: 6px;
      overflow: hidden;
      color: rgba(0, 0, 0, 0.65);
      white-space: nowrap;
      text-overflow: ellipsis;
      transition: all 0.3s;
    }
  }
}
/*包含以下四种的链接*/
a {
  color: #202940;
  text-decoration: none;
}
/*正常的未被访问过的链接*/
a:link {
  text-decoration: none;
}
/*已经访问过的链接*/
a:visited {
  text-decoration: none;
}
/*鼠标划过(停留)的链接*/
a:hover {
  text-decoration: none;
}
/* 正在点击的链接*/
a:active {
  text-decoration: none;
}
</style>
