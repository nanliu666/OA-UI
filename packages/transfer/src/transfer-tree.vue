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
        <el-tree
          :class="{'mg-transfer-tree':!buttonArrows}"
          ref="tree"
          highlight-current
          :data="filteredDatas"
          :default-checked-keys="checked"
          @check="handleSelectionChange"
          show-checkbox
          :check-on-click-node="true"
          node-key="id"
          v-bind="{...$props,...$attrs}"
        ></el-tree>
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
    </div>
  </div>
</template>
<style lang="scss">
.mg-checkbox {
  .el-checkbox__input {
    display: none !important;
  }

}
.mg-transfer-tree .el-checkbox__original,.mg-transfer-tree .el-checkbox__inner{
  display: none;
}
.mg-transfer-tree .is-disabled+.el-tree-node__label{
  color: #c0c4cc;
  cursor: not-allowed;
}

</style>
<script>
import ElInput from 'element-ui/packages/input'
import Locale from 'element-ui/src/mixins/locale'

export default {
  mixins: [Locale],

  name: 'MgTransferTree',
  Mgname: 'MgTransferTree',

  componentName: 'MgTransferTree',

  components: {
    ElInput
  },

  props: {
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
      len: 0,
      checkChangeByUser: true,
      multipleSelection: [],
      disabled_id: []
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
        ) {
          return
        }
        let checked = []
        const checkableDataKeys = this.TreeId(this.checkableData, 2)
        checked = checkableDataKeys.filter((item) => {
          return val.indexOf(item) > -1
        })
        this.checkChangeByUser = false
        this.checked = checked
      }
    }
  },

  computed: {
    filteredDatas() {
      return this.data.filter((item) => {
        if (typeof this.filterMethod === 'function') {
          return this.filterMethod(this.query, item)
        } else {
          const label = item[this.labelProp] || item[this.keyProp].toString()
          return label.toLowerCase().indexOf(this.query.toLowerCase()) > -1
        }
      })
    },

    checkableData() {
      let treeData = JSON.parse(JSON.stringify(this.filteredDatas))
      const deleteParentNode = (data) => {
        const ret = []
        for (let i = 0, l = data.length; i < l; i++) {
          const node = data[i]
          if (!node[this.disabledProp]) {
            ret.push(node)
          } else {
            this.disabled_id.push(node.id)
          }
          if (node.children && node.children !== undefined) {
            node.children = deleteParentNode(node.children)
          }
        }
        return ret
      }

      return deleteParentNode(treeData)
    },

    checkedSummary() {
      const checkedLength = this.checked.length
      const dataLength = this.len
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
      return this.props.id || 'id'
    },

    disabledProp() {
      return this.props.disabled || 'disabled'
    },

    hasFooter() {
      return !!this.$slots.default || this.allMove||this.limit
    }
  },

  methods: {
    findPathByLeafId(leafId, nodes, path) {
      if (path === undefined) {
        path = []
      }
      for (var i = 0; i < nodes.length; i++) {
        var tmpPath = path.concat()
        tmpPath.push(nodes[i].id)
        if (leafId == nodes[i].id) {
          return tmpPath
        }
        if (nodes[i].children) {
          var findResult = this.findPathByLeafId(leafId, nodes[i].children, tmpPath)
          if (findResult) {
            return findResult
          }
        }
      }
    },
    handleAllMove() {
      this.allChecked = true
      this.checked = this.TreeId(this.checkableData)
      var list = this.TreeId(this.data, 1)
      var disId_list = []
      // console.log( this.disabled_id)
      this.disabled_id.map((item) => {
        disId_list = [...new Set(disId_list.concat(this.findPathByLeafId(item, this.data)))]
      })
      this.checked = this.checked.filter((item) => {
        return disId_list.indexOf(item) == -1
      })

      this.$emit('checked-change', this.checked, this.checked, 1)
    },
    TreeId(tree, num) {
      let treeData = JSON.parse(JSON.stringify(tree))
      const ret = []
      const deleteParentNode = (data) => {
        for (let i = 0, l = data.length; i < l; i++) {
          const node = data[i]

          if (num == 1 ? node.id : !node[this.disabledProp]) {
            ret.push(node.id)
          }
          if (node.children && node.children !== undefined) {
            node.children = deleteParentNode(node.children)
          }
        }

        return ret
      }

      return deleteParentNode(treeData)
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

    handleSelectionChange(checkedNodes, checkedKeys, halfCheckedNode, halfCheckedKeys) {
      this.$emit('get-list', checkedKeys.halfCheckedKeys, this.len)

      this.multipleSelection = checkedKeys.checkedKeys
      this.allChecked = true

      this.checked = this.allChecked ? this.multipleSelection : []
    },

    updateAllChecked() {
      const checkableDataKeys = this.TreeId(this.checkableData, 1)
      setTimeout(() => {
        this.len = this.$refs.tree.treeItems.length
      }, 10)
      this.allChecked =
        checkableDataKeys.length > 0 &&
        checkableDataKeys.every((item) => {
          return this.checked.indexOf(item) > -1
        })
    },

    handleAllCheckedChange(value) {
      this.checked = value ? this.checkableData.map((item) => item[this.keyProp]) : []
    },

    clearQuery() {
      if (this.inputIcon === 'circle-close') {
        this.query = ''
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.len = this.$refs.tree.treeItems.length
      const checkableDataKeys = this.TreeId(this.checkableData, 2)
      this.checked = checkableDataKeys.filter((item) => {
        return this.defaultChecked.indexOf(item) > -1
      })
    }, 10)
  }
}
</script>
