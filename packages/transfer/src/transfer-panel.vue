<template>
  <div class="el-transfer-panel  mg-transfer-panel">
    <!-- checkbox 全选 选项 -->
    <p class="el-transfer-panel__header mg-transfer-panel__header">
      <el-checkbox
        v-model="allChecked"
        v-show="buttonArrows"
        @change="handleAllCheckedChange"
        :indeterminate="isIndeterminate"
      >
        {{ title }}
        <span>{{ checkedSummary }}</span>
      </el-checkbox>
      <label class="el-checkbox" v-show="!buttonArrows">
        <span class="el-checkbox__label">{{ title }}</span>
      </label>
    </p>

    <div :class="['el-transfer-panel__body', hasFooter ? 'is-with-footer' : '']">
      <!-- 输入框  -->
      <el-input
        class="el-transfer-panel__filter"
        v-model="query"
        size="small"
        :placeholder="placeholder"
        @mouseenter.native="inputHover = true"
        @mouseleave.native="inputHover = false"
        v-if="filterable"
      >
        <i slot="prefix" :class="['el-input__icon', 'el-icon-' + inputIcon]" @click="clearQuery"></i>
      </el-input>

      <el-checkbox-group
        v-model="checked"
        v-show="!hasNoMatch && data.length > 0"
        :class="{ 'is-filterable': filterable }"
        class="el-transfer-panel__list"
      >
        <!-- checkbox 多选 选项 -->
        <el-checkbox
          :class="['el-transfer-panel__item',buttonArrows?'':'mg-checkbox']"
          :label="item[keyProp]"
          :disabled="item[disabledProp]"
          :key="item[keyProp]"
          v-for="item in filteredData"
        >
          <!-- 文字显示位置-->
          <option-content :option="item"></option-content>
        </el-checkbox>
      </el-checkbox-group>
      <p class="el-transfer-panel__empty" v-show="hasNoMatch">{{ t('el.transfer.noMatch') }}</p>
      <!-- 无数据展示 -->
      <p
        class="el-transfer-panel__empty"
        v-show="data.length === 0 && !hasNoMatch"
      >{{ t('el.transfer.noData') }}</p>
    </div>
    <!-- 底部按钮插槽 -->
    <div class="el-transfer-panel__footer mg-transfer-panel__footer" v-if="hasFooter">
      <div class="mg-transfer-panel__footer_box">
        <slot></slot>
        <el-button v-if="allMove" :disabled="data.length==0" type="text" size="mini" @click="handleAllMove">全部移动</el-button>
      </div>
      <div class="mg-transfer-panel__footer_page" v-if="limit">
        <a
          href="#"
          :class="['el-icon-arrow-left',pagination==1?'mg-onlyReady':'']"
          @click="addPage(-1)"
        ></a>
        <span>{{pagination}}</span> /
        <span>{{totalPage}}</span>
        <a
          href="#"
          :class="['el-icon-arrow-right',pagination==totalPage?'mg-onlyReady':'']"
          @click="addPage(1)"
        ></a>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.mg-checkbox {
  .el-checkbox__input {
    display: none !important;
  }
}

</style>
<script>
import ElCheckboxGroup from 'element-ui/packages/checkbox-group'
import ElCheckbox from 'element-ui/packages/checkbox'
import ElInput from 'element-ui/packages/input'
import Locale from 'element-ui/src/mixins/locale'

export default {
  mixins: [Locale],
  name: 'ElTransferPanel',

  componentName: 'ElTransferPanel',

  components: {
    ElCheckboxGroup,
    ElCheckbox,
    ElInput,
    OptionContent: {
      props: {
        option: Object
      },
      render(h) {
        const getParent = (vm) => {
          if (vm.$options.componentName === 'ElTransferPanel') {
            return vm
          } else if (vm.$parent) {
            return getParent(vm.$parent)
          } else {
            return vm
          }
        }
        const panel = getParent(this)
        const transfer = panel.$parent || panel
        return panel.renderContent ? (
          panel.renderContent(h, this.option)
        ) : transfer.$scopedSlots.default ? (
          transfer.$scopedSlots.default({ option: this.option })
        ) : (
          <span>{this.option[panel.labelProp] || this.option[panel.keyProp]}</span>
        )
      }
    }
  },

  props: {
    limit: {
      type: Number
    },
    allMove: {
      //配置一键全部移动
      type: Boolean,
      default: false
    },
    buttonArrows: {
      //是否需要方向键
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default() {
        return []
      }
    },
    renderContent: Function,
    placeholder: String,
    title: String,
    filterable: Boolean,
    format: Object,
    filterMethod: Function,
    defaultChecked: Array,
    props: Object
  },

  data() {
    return {
      checked: [],
      allChecked: false,
      query: '',
      inputHover: false,
      checkChangeByUser: true,
      pagination: 1, //当前页
      data_length:0,//页数依赖项
    }
  },

  watch: {
    checked(val, oldVal) {
      this.updateAllChecked()
      if (this.checkChangeByUser) {
        const movedKeys = val
          .concat(oldVal)
          .filter((v) => val.indexOf(v) === -1 || oldVal.indexOf(v) === -1)

        this.$emit('checked-change', val, movedKeys)
      } else {
        this.$emit('checked-change', val)
        this.checkChangeByUser = true
      }
    },

    data() {
      const checked = []
      const filteredDataKeys = this.filteredData.map((item) => item[this.keyProp])
      this.checked.forEach((item) => {
        if (filteredDataKeys.indexOf(item) > -1) {
          checked.push(item)
        }
      })
      this.checkChangeByUser = false
      this.checked = checked
    },

    checkableData() {
      this.updateAllChecked()
    },

    defaultChecked: {
      immediate: true,
      handler(val, oldVal) {
        if (
          oldVal &&
          val.length === oldVal.length &&
          val.every((item) => oldVal.indexOf(item) > -1)
        )
          return
        const checked = []

        const checkableDataKeys = this.checkableData.map((item) => item[this.keyProp])
        val.forEach((item) => {
          if (checkableDataKeys.indexOf(item) > -1) {
            checked.push(item)
          }
        })
        this.checkChangeByUser = false
        this.checked = checked
      }
    },
    pagination() {
      // console.log(1)
    }
  },

  computed: {
    totalPage() {
      //总页数
      return Math.ceil(this.data_length / this.limit)
    },
    filteredData() {
      var list = []
      if (this.limit) {
        
        list = this.data
          .filter((item) => {
            if (typeof this.filterMethod === 'function') {
              return this.filterMethod(this.query, item)
            } else {
              const label = item[this.labelProp] || item[this.keyProp].toString()
              return label.toLowerCase().indexOf(this.query.toLowerCase()) > -1
            }
          })
          this.sumLimit(list)
          list=list.slice(this.limit * this.pagination - this.limit, this.limit * this.pagination)
      } else {
        list = this.data.filter((item) => {
          if (typeof this.filterMethod === 'function') {
            return this.filterMethod(this.query, item)
          } else {
            const label = item[this.labelProp] || item[this.keyProp].toString()
            return label.toLowerCase().indexOf(this.query.toLowerCase()) > -1
          }
        })
      }

      return list
    },

    checkableData() {
      return this.filteredData.filter((item) => !item[this.disabledProp])
    },

    checkedSummary() {
      const checkedLength = this.checked.length
      const dataLength = this.data.length
      const { noChecked, hasChecked } = this.format
      if (noChecked && hasChecked) {
        return checkedLength > 0
          ? hasChecked.replace(/\${checked}/g, checkedLength).replace(/\${total}/g, dataLength)
          : noChecked.replace(/\${total}/g, dataLength)
      } else {
        return `${checkedLength}/${dataLength}`
      }
    },

    isIndeterminate() {
      const checkedLength = this.checked.length
      return checkedLength > 0 && checkedLength < this.checkableData.length
    },

    hasNoMatch() {
      return this.query.length > 0 && this.filteredData.length === 0
    },

    inputIcon() {
      return this.query.length > 0 && this.inputHover ? 'circle-close' : 'search'
    },

    labelProp() {
      return this.props.label || 'label'
    },

    keyProp() {
      return this.props.key || 'key'
    },

    disabledProp() {
      return this.props.disabled || 'disabled'
    },

    hasFooter() {
      return !!this.$slots.default || this.allMove||this.limit
    }
  },

  methods: {
    sumLimit(data){
      this.data_length=data.length
    },
    addPage(num) {
      this.pagination += num
    },
    handleAllMove() {
      this.allChecked = true
      var list = this.data.filter((item) => !item[this.disabledProp])
      this.checked = list.map((item) => {
        return item[this.keyProp]
      })
      this.$emit('checked-change', this.checked, this.checked, 1)
    },
    updateAllChecked() {
      const checkableDataKeys = this.checkableData.map((item) => item[this.keyProp])
      this.allChecked =
        checkableDataKeys.length > 0 &&
        checkableDataKeys.every((item) => this.checked.indexOf(item) > -1)
    },

    handleAllCheckedChange(value) {
      this.allChecked = true
      var list = this.data.filter((item) => !item[this.disabledProp])
      this.checked = value
        ? list.map((item) => {
            return item[this.keyProp]
          })
        : []
    },

    clearQuery() {
      if (this.inputIcon === 'circle-close') {
        this.query = ''
      }
    }
  },
  updated() {
    //  if(this.pagination)
    if (this.totalPage < this.pagination && this.data.length > 0) {
      this.pagination = this.totalPage
    } else if (this.data.length == 0) {
      this.pagination = 1
    }
  }
}
</script>
