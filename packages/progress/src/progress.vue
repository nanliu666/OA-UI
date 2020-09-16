<template>
  <div style="display: inline-block">
    <div v-if="type=='procedure'" style="position: relative;">
      <svg
        v-for="(item,index) in 5"
        :style="'margin-right:'+marginRight+'px'"
        :key="index"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        :height="strokeHeight"
        :width="strokeWidth"
      >
        <rect :width="strokeWidth" :height="strokeHeight" :style="trailPathStyle[index]" />
      </svg>
      <span class="mg-progress-span" v-if="showText" :style="'right:-'+textRight+'px'">
        {{percentages*10}}%
      </span>
    </div>
    <el-progress v-else v-bind="{...$props,...$attrs}"></el-progress>
  </div>
</template>
<style lang="scss">
.mg-progress-span{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
<script>
export default {
  name: 'mgProgress',
  mgname: 'mgProgress',
  props: {
    textRight:Number,
    type: {
      type: String,
      default: 'line',
      validator: (val) => ['line', 'circle', 'dashboard', 'procedure'].indexOf(val) > -1
    },
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator: (val) => val >= 0 && val <= 100
    },
    status: {
      type: String,
      validator: (val) => ['success', 'exception', 'warning'].indexOf(val) > -1
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    strokeHeight: {
      type: Number,
      default: 30
    },
    marginRight: {
      type: Number,
      default: 5
    },
    strokeLinecap: {
      type: String,
      default: 'round'
    },
    textInside: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 126
    },
    showText: {
      type: Boolean,
      default: true
    },
    color: {
      type: [String, Array, Function],
      default: ''
    },
    format: Function
  },

  data() {
    return {}
  },
  computed: {
    percentages() {
      return Math.ceil(this.percentage / 10)
    },
    trailPathStyle() {
      var ret = ''
      switch (this.status) {
        case 'success':
          ret = '#13ce66'
          break
        case 'exception':
          ret = '#ff4949'
          break
        case 'warning':
          ret = '#e6a23c'
          break
        default:
          ret = '#20a0ff'
      }
      var colors = []
      for (var k = 0; k < 5; k++) {
        if (k < this.percentages) {
          colors.push({
            fill: this.color||ret
          })
        } else {
          colors.push({
            fill: '#f2f2f2'
          })
        }
      }

      return colors
    }
  },
  created() {
    if (this.type == 'procedure') {
      // console.log(this.color)
      // console.log(this.percentages)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>