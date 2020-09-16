<template>
  <div class="el-transfer-panel mg-transfer-panel">
    <p class="el-transfer-panel__header">
      {{ title }}
      <span>{{ checkedSummary }}</span>
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
      <div
        v-show="!hasNoMatch && data.length > 0"
        :class="{ 'is-filterable': filterable }"
        class="el-transfer-panel__list"
      >
        <el-table
          size="mini"
          max-height="186"
          ref="multipleTable"
          :data="filteredDatas"
          :row-class-name="tableRowClassName"
          tooltip-effect="dark"
          @row-click="rowClick"
          style="width: 99.5%"
          @select-all="AllSelect"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="30" v-if="buttonArrows" :selectable="selectable"></el-table-column>
          <el-table-column
            v-for="item in columns.slice(0,rightColumn)"
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
            :align="item.align"
            :show-overflow-tooltip="true"
            :width="item.width"
            :min-width="item.minWidth"
          >
            <template slot-scope="scope">
              <span>{{scope.row[item.prop]}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>

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
        <el-button
          v-if="allMove"
          type="text"
          :disabled="data.length==0"
          size="mini"
          @click="handleAllMove"
        >全部移动</el-button>
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
          :class="['el-icon-arrow-right',pagination>=totalPage?'mg-onlyReady':'']"
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
.el-table .tr-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
}
.mg-transfer-panel {
  width: initial;
  min-width: 200px;
  .el-transfer-panel__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 15px;
  }
}
</style>
<script>
import ElInput from 'element-ui/packages/input'
import Locale from 'element-ui/src/mixins/locale'

export default {
  mixins: [Locale],

  name: 'MgTransferTable',
  Mgname: 'MgTransferTable',

  componentName: 'MgTransferTable',

  components: {
    ElInput
  },

  props: {
    limit: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: String,
    rightColumns: {
      type: Number,
      default: 7
    },
    data: {
      //表格数据
      type: Array,
      default() {
        return []
      }
    },
    columns: {
      //表头参数
      type: Array,
      default() {
        return [
          {
            prop: 'index',
            label: ''
          }
        ]
      }
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
      multipleSelection: [],
      pagination: 1, //当前页
      data_length: 0 //页数依赖项
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
      const filteredDataKeys = this.filteredDatas.map((item) => item[this.keyProp])
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
    rightColumn() {
      if (this.name == 'right') {
        return this.rightColumns > 7 ? 7 : this.rightColumns
      } else {
        return 7
      }
    },
    filteredDatas() {
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
      return this.filteredDatas.filter((item) => !item[this.disabledProp])
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
      return this.query.length > 0 && this.filteredDatas.length === 0
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
      return !!this.$slots.default || this.allMove || this.limit
    }
  },

  methods: {
     sumLimit(data){
      this.data_length=data.length
    },
    tableRowClassName({ row, rowIndex }) {
      if (row.disabled == true) {
        return 'tr-disabled'
      }
    },
    handleAllMove() {
      //一键移动
      this.allChecked = true
      var list = this.data.filter((item) => !item[this.disabledProp])
      this.checked = list.map((item) => item[this.keyProp])
      this.$emit('checked-change', this.checked, this.checked, 1)
    },
    addPage(num) {
      this.pagination += num
    },
    selectable(row, index) {
      return row.disabled == undefined || row.disabled == '' || row.disabled == false ? true : false
    },
    rowClick(row, column, event) {
      let is_ok =
        row.disabled == undefined || row.disabled == '' || row.disabled == false ? true : false
      if (!is_ok) {
        return false
      }
      if (!this.buttonArrows) {
        this.multipleSelection = row
        this.allChecked = true
        this.checked = this.allChecked ? [this.multipleSelection.key] : []
      } else {
        this.$refs.multipleTable.toggleRowSelection(row)
      }
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      this.allChecked = true
      this.checked = this.allChecked ? this.multipleSelection.map((item) => item[this.keyProp]) : []
    },
    updateAllChecked() {
      const checkableDataKeys = this.checkableData.map((item) => item[this.keyProp])
      this.allChecked =
        checkableDataKeys.length > 0 &&
        checkableDataKeys.every((item) => {
          return this.checked.indexOf(item) > -1
        })
    },
    AllSelect(value) {
      var list = this.data.filter((item) => !item[this.disabledProp])
      this.checked = value ? list.map((item) => item[this.keyProp]) : []
    },
    handleAllCheckedChange(value) {
      var list = this.data.filter((item) => !item[this.disabledProp])
      this.checked = value ? list.map((item) => item[this.keyProp]) : []
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
