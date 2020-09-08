<template>
  <div
    ref="statisticRef"
    class="mg-statistic"
    @click="handleClick"
  >
    <div class="mg-label">
      <mg-tooltip
        v-if="showValueTip"
        class="item"
        effect="dark"
        :content="label"
        placement="top-start"
      >
        <span class="mg-label-content">{{ label }}</span>
      </mg-tooltip>
      <span
        v-if="!showValueTip"
        class="mg-label-content"
      >{{ label }}</span>
      <mg-tooltip
        v-if="labelIcon !== ''"
        class="item"
        effect="dark"
        :content="tipDetail"
        placement="top-start"
      >
        <i :class="labelIcon" />
      </mg-tooltip>
    </div>
    <div
      v-if="!$slots.default"
      class="mg-value"
      :style="{ color: color }"
    >
      <i :class="vaulePrefix" />
      <span ref="valueRef">{{ showValue }}</span>
      <span v-if="valueSuffix">{{ valueSuffix }}</span>
    </div>
    <slot 
      v-if="$slots.default"
    />
  </div>
</template>

<script>
import { formatMoney, formatDecimals } from '../../../src/utils/util'
export default {
  name: 'MgStatistic',
  mgName: 'MgStatistic',
  props: {
    label: {
      type: String,
      default: '',
      required: true
    },
    value: {
      type: Number,
      default: 0
    },
    valueType: {
      type: String,
      default: 'string'
    },
    labelIcon: {
      type: String,
      default: ''
    },
    tipContent: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    vaulePrefix: {
      type: String,
      default: '' //el-icon-top el-icon-bottom
    },
    valueSuffix: {
      type: String,
      default: '' //单位 比如%
    }
  },
  data() {
    return {
      showValueTip: true,
    }
  },
  computed: {
    tipDetail() {
      return this.tipContent ? this.tipContent : `${this.label}说明`
    },
    showValue() {
      return this.valueType === 'string' ? formatMoney(this.value) : formatDecimals(this.value)
    },
  },
  created() {},
  mounted() {
    if(this.$refs.valueRef && this.$refs.statisticRef.offsetWidth >= this.$refs.valueRef.offsetWidth) {
      this.showValueTip = false
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
.mg-statistic {
  cursor: pointer;
  .mg-label {
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #757c85;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .mg-label-content {
      margin-right: 8px;
    }
  }
  .mg-value {
    font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #202940;
  }
}
</style>
