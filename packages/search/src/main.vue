<template>
  <a-auto-complete
    class="mg-search"
    :filter-option="filterOption"
    :value="input"
    v-bind="aAutoCompleteProps"
    @change="handleChange"
    @select="handleSubmit"
  >
    <template slot="dataSource">
      <a-select-opt-group
        v-for="(group, index) of _dataSource"
        :key="index"
      >
        <span
          slot="label"
          v-text="group.title"
        />
        <a-select-option
          v-for="opt of group.children"
          :key="opt"
          :value="opt"
        >
          <span
            class="option__label"
            v-html="labelFormatter(opt)"
          />
        </a-select-option>
      </a-select-opt-group>
    </template>
    <a-input-search
      class="mg-search-input"
      :style="{ width }"
      :allow-clear="allowClear"
      :enter-button="enterButton"
      @keydown.enter="handleSubmit"
    >
      <slot
        slot="suffix"
        name="suffix"
      >
        <!-- default suffix icon.search -->
      </slot>
    </a-input-search>
  </a-auto-complete>
</template>
<script>
import { A_AUTO_COMPLETE_PROPS, A_AUTO_COMPLETE_PROPS_DEFAULT } from './utils/config'
import { escape } from '@/utils/util'

export default {
  name: 'MgSearch',

  props: {
    allowClear: Boolean,
    // 是否记录历史记录
    history: {
      type: [Boolean, Object],
      default: true
    },

    dataSource: {
      type: [Array, Object],
      default: () => []
    },

    // 是否显示button
    enterButton: Boolean,

    defaultValue: {
      type: String,
      default: ''
    },

    width: {
      type: String,
      default: 'auto'
    }
  },

  data() {
    return {
      input: this.defaultValue,
      historys: []
    }
  },

  computed: {
    aAutoCompleteProps() {
      const props = Object.assign({}, A_AUTO_COMPLETE_PROPS_DEFAULT)
      const { $attrs } = this
      for (const key in $attrs) {
        if (A_AUTO_COMPLETE_PROPS.includes(key)) {
          props[key] = $attrs[key]
        }
      }
      return props
    },

    _dataSource() {
      return [...this.dataSource, this.defaultHistory]
    },

    // 默认的历史记录
    defaultHistory() {
      // return default history while this.history is true
      const DEFAULT_HISTORY = {
        title: '历史记录',
        children: this.historys
      }
      return DEFAULT_HISTORY
      // return typeof this.history === 'object' ? this.history : this.history ? DEFAULT_HISTORY : null
    }
  },

  methods: {
    // 高亮keywords
    labelFormatter(label) {
      const { input } = this
      const REG = new RegExp(`(.*)${input.trim()}(.*)`, 'gi')
      const matchs = REG.exec(label)
      if (matchs) {
        const [, prefix, surfix] = matchs.map(escape)
        return `<span>${prefix}</span><em class="option__label--hightlight">${input}</em><span>${surfix}</span>`
      }
    },

    handleChange(input) {
      this.input = input
      this.$emit('input', input) // v-model event
    },

    // 添加history并emit事件submit
    handleSubmit() {
      const input = this.input
      this.setHistory(input)
      this.$emit('submit', input)
    },

    // 输入的时候进行过滤
    filterOption(input, option) {
      input = input && input.trim()
      const { componentOptions } = option
      const { propsData } = componentOptions
      return propsData.value && propsData.value.toLowerCase().includes(input.toLowerCase())
    },

    // 添加历史记录,并过滤重复的选项
    setHistory(input) {
      input = input && input.trim()
      const { historys } = this
      if (!historys.includes(input)) {
        this.historys.push(input)
      }
    }
  }
}
</script>

<style lang="less">
@import '~@/styles/common';

.mg-search {
  &-btn {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    margin: 0;
    margin-right: -12px;
    position: relative;
  }
}

.ant-select-auto-complete.ant-select .ant-input {
  // 保持输入框的高度与按钮一致
  height: @btn-height-base;
}

.option__label {
  &--hightlight {
    color: @primary-color;
    font-weight: bold;
  }
}
</style>
