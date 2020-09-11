<template>
  <span class="mg-search">
    <el-select
      ref="select"
      :value="value"
      v-bind="elSelectProps"
      v-on="elSelectEvents"
      @change="confirm"
      @keydown.native="handleKeydown"
      @visible-change="handleVisibleChange"
    >
      <el-option-group
        v-for="(group, index) of _options"
        :key="index"
        :label="group.label"
      >
        <el-option
          v-for="(option, i) of group.options"
          :key="i"
          v-bind="getOption(option)"
        >
          <div class="mg-option">
            <span mg-option__label>{{ getOption(option).label }}</span>
            <i
              v-if="group._type"
              class="el-icon-close"
              @click.stop="() => removeHistory(option)"
            />
          </div>
        </el-option>
      </el-option-group>
    </el-select>
    <el-button
      v-if="searchBtn"
      type="primary"
      @click="handleBtnClick"
    >
      {{ searchBtnText }}
    </el-button>
  </span>
</template>

<script>
import {
  EL_SELECT_EVENTS,
  EL_SELECT_METHODS,
  EL_SELECT_PROPS,
  EL_SELECT_PROPS_DEFAULT
} from './config'

const SUBMIT_EVENT_NAME = 'search'

export default {
  name: 'MgSearch',
  mgName: 'MgSearch',

  filters: {},

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    // 自定义搜索列表的内容以push的形式添加在optionGroups数组中,否则添加在数组的前面
    append: Boolean,
    // 是否记录历史记录
    history: {
      type: [Boolean, Array],
      default: true
    },
    // 输入额外的选项
    options: {
      type: [Array, Object, Boolean],
      default: false
    },

    searchBtn: Boolean,
    searchBtnText: {
      type: String,
      default: '搜索'
    },

    value: String
  },

  data() {
    return {
      historyGroup: {
        label: '搜索历史',
        _type: 'history',
        options: []
      }
    }
  },

  computed: {
    elSelectProps() {
      const props = Object.assign({}, EL_SELECT_PROPS_DEFAULT)
      const { $attrs } = this
      for (const key in $attrs) {
        if (EL_SELECT_PROPS.includes(key)) {
          props[key] = $attrs[key]
        }
      }
      return props
    },

    elSelectEvents() {
      const events = Object.assign({})
      const { $listeners } = this
      for (const key in $listeners) {
        if (EL_SELECT_EVENTS.includes(key)) {
          events[key] = $listeners[key]
        }
      }
      return events
    },

    _options() {
      let res = null
      const { options, historyGroup } = this
      if (!options) {
        res = []
      } else {
        if (Array.isArray(options) && options.length && !options[0].options) {
          res = [{ label: '', options }]
        } else {
          res = options
        }
      }
      res = res.concat(historyGroup)
      return this.append ? res.reverse() : res
    }
  },

  methods: {
    ...EL_SELECT_METHODS.reduce((acc, method) => {
      acc[method] = function() {
        return this.$refs.input[method](...arguments)
      }
      return acc
    }, {}),

    clear() {
      this.setValue(null)
    },

    handleBtnClick() {
      this.confirm()
    },
    // 处理btn事件
    confirm(value) {
      if (value || this.value) {
        value && (this.value = value)
        this.submit()
      }
    },

    handleKeydown(event) {
      switch (event.code) {
        case 'Enter':
          // 点击回车触行为等同提交
          this.confirm()
          break
        default:
          this.setValue(event.target.value)
      }
    },

    handleVisibleChange(visible) {
      // 处理已经搜索了内容的时候,重新输入的时候,不能接着上次的输入结果进行
      this.$refs.select.selectedLabel = this.value
    },

    removeHistory(option) {
      if (this.history) {
        option = 'string' === typeof option ? option : option.value
        const historyGroup = this.historyGroup
        historyGroup.options = historyGroup.options.filter((history) => history !== option)
      }
    },

    setValue(value) {
      this.$emit(this.$options.model.event, value)
    },

    submit() {
      this.$emit(SUBMIT_EVENT_NAME, this.value)
      // 记录历史记录
      if (this.history) {
        const historyGroup = this.historyGroup
        historyGroup.options = Array.from(
          new Set( // 使用Set去重
            historyGroup.options
              .concat([this.value])
              .filter((i) => !!i)
              .map((h) => String.prototype.trim.call(h))
              .sort()
          )
        )
      }
    },

    getOption(option) {
      return 'string' === typeof option
        ? {
            label: option,
            value: option
          }
        : option
    }
  }
}
</script>

<style lang="scss">
.mg-search {
  i.el-select__caret.el-icon-arrow-up {
    // 通过样式覆盖的方式(否则需要修改源码)
    transform: none;
    &::before {
      content: '\e778';
    }
  }
  // TODO: 清除圆角
}
.mg-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: 1px;
  i.el-icon-close {
  }
}
</style>
