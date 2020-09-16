
<template>
  <div class="el-transfer mg-transfer">
    <transfer-table
      v-bind="{...$props,...$attrs}"
      ref="leftPanel"
      v-if="isTransferTable&&!isTransferTree"
      name="left"
      :data="sourceData"
      :title="titles[0] || t('el.transfer.titles.0')"
      :default-checked="leftDefaultChecked"
      :placeholder="filterPlaceholder || t('el.transfer.filterPlaceholder')"
      @checked-change="onSourceCheckedChange"
    >
      <slot name="left-footer"></slot>
    </transfer-table>
    <transfer-tree
      v-bind="{...$props,...$attrs}"
      ref="leftPanel"
      v-else-if="!isTransferTable&&isTransferTree"
      name="left"
      :data="sourceData"
      :title="titles[0] || t('el.transfer.titles.0')"
      :default-checked="leftDefaultChecked"
      :placeholder="filterPlaceholder || t('el.transfer.filterPlaceholder')"
      @checked-change="onSourceCheckedChange"
      @get-list="getList"
    >
      <slot name="left-footer"></slot>
    </transfer-tree>
    <transfer-panel
      v-bind="{...$props,...$attrs}"
      ref="leftPanel"
      v-else
      :data="sourceData"
      :title="titles[0] || t('el.transfer.titles.0')"
      :default-checked="leftDefaultChecked"
      :placeholder="filterPlaceholder || t('el.transfer.filterPlaceholder')"
      @checked-change="onSourceCheckedChange"
    >
      <slot name="left-footer"></slot>
    </transfer-panel>
    <div class="el-transfer__buttons" v-if="buttonArrows">
      <el-button
        type="primary"
        :class="['el-transfer__button', hasButtonTexts ? 'is-with-texts' : '']"
        @click.native="addToLeft"
        :disabled="rightChecked.length === 0"
      >
        <i class="el-icon-arrow-left"></i>
        <span v-if="buttonTexts[0] !== undefined">{{ buttonTexts[0] }}</span>
      </el-button>
      <el-button
        type="primary"
        :class="['el-transfer__button', hasButtonTexts ? 'is-with-texts' : '']"
        @click.native="addToRight"
        :disabled="leftChecked.length === 0"
      >
        <span v-if="buttonTexts[1] !== undefined">{{ buttonTexts[1] }}</span>
        <i class="el-icon-arrow-right"></i>
      </el-button>
    </div>

    <transfer-table
      v-bind="{...$props,...$attrs}"
      ref="rightPanel"
      v-if="isTransferTable&&!isTransferTree"
      :data="targetData"
      name="right"
      :title="titles[1] || t('el.transfer.titles.1')"
      :default-checked="rightDefaultChecked"
      :placeholder="filterPlaceholder || t('el.transfer.filterPlaceholder')"
      @checked-change="onTargetCheckedChange"
    >
      <slot name="right-footer"></slot>
    </transfer-table>
    <transfer-tree
      v-bind="{...$props,...$attrs}"
      ref="rightPanel"
      v-else-if="!isTransferTable&&isTransferTree"
      :data="targetData"
      name="right"
      :title="titles[1] || t('el.transfer.titles.1')"
      :default-checked="rightDefaultChecked"
      :placeholder="filterPlaceholder || t('el.transfer.filterPlaceholder')"
      @checked-change="onTargetCheckedChange"
      @get-list="getList"
    >
      <slot name="right-footer"></slot>
    </transfer-tree>
    <transfer-panel
      v-bind="{...$props,...$attrs}"
      ref="rightPanel"
      v-else
      :data="targetData"
      :title="titles[1] || t('el.transfer.titles.1')"
      :default-checked="rightDefaultChecked"
      :placeholder="filterPlaceholder || t('el.transfer.filterPlaceholder')"
      @checked-change="onTargetCheckedChange"
    >
      <slot name="right-footer"></slot>
    </transfer-panel>
  </div>
</template>
<style lang="scss">
.mg-transfer {
  .mg-transfer-panel {
    width: initial;
    min-width: 200px;
    margin: 0 5px;
    .el-transfer-panel__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 15px;
      span {
        color: #718199;
        font-size: 12px;
        font-weight: 400;
      }
      .el-checkbox {
        width: 100%;
        margin-right: 0px;
        .el-checkbox__label span {
          right: 0;
        }
      }
    }
    .el-table-column--selection .cell {
      padding-left: 15px;
    }
  }
  .el-transfer-panel__filter {
    text-align: center;
    margin: 15px;
    box-sizing: border-box;
    display: block;
    width: auto;
  }

  .el-table th > .cell,
  .el-table .cell.el-tooltip {
    padding-left: 5px;
    padding-right: 5px;
  }

  .el-table--scrollable-x .el-table__body-wrapper {
    overflow-x: hidden;
  }
  .el-transfer-panel .el-transfer-panel__footer::after {
    display: none;
  }
  .mg-transfer-panel__footer {
    text-align: left;
    line-height: 40px;
    display: flex;
    align-items: center;
    padding: 0 6px;
    box-sizing: border-box;
    justify-content: space-between;
    .transfer-footer {
    }
    .mg-transfer-panel__footer_box {
      line-height: 38px;
    }
    .mg-transfer-panel__footer_page {
      display: inline-block;
      font-size: 12px;
      .mg-onlyReady {
        pointer-events: none;
        color: #e1e1e1;
      }
      .el-icon-arrow-left {
        font-size: 14px;
        text-decoration: none;
        margin-right: 2px;
        vertical-align: middle;
      }
      .el-icon-arrow-right {
        font-size: 14px;
        vertical-align: middle;
        text-decoration: none;
        margin-left: 2px;
      }
    }
  }
}
</style>
<script>
import ElButton from 'element-ui/packages/button'
import Emitter from 'element-ui/src/mixins/emitter'
import Locale from 'element-ui/src/mixins/locale'
import TransferPanel from './transfer-panel.vue'
import TransferTable from './transfer-table.vue'
import TransferTree from './transfer-tree.vue'
import Migrating from 'element-ui/src/mixins/migrating'
import { deepClone } from 'main/utils/util.js'
var halfCheckedKeys = []
export default {
  name: 'MgTransfer',
  Mgname: 'MgTransfer',

  mixins: [Emitter, Locale, Migrating],

  components: {
    TransferPanel,
    TransferTable,
    TransferTree,
    ElButton
  },

  props: {
    allMove: Boolean,

    rightColumns: {
      type: Number,
      default: 7
    },
    isTransferTable: {
      type: Boolean,
      default: false
    },
    isTransferTree: {
      type: Boolean,
      default: false
    },
    buttonArrows: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default() {
        return []
      }
    },
    titles: {
      type: Array,
      default() {
        return []
      }
    },
    buttonTexts: {
      type: Array,
      default() {
        return []
      }
    },
    filterPlaceholder: {
      type: String,
      default: ''
    },
    filterMethod: Function,
    leftDefaultChecked: {
      type: Array,
      default() {
        return []
      }
    },
    rightDefaultChecked: {
      type: Array,
      default() {
        return []
      }
    },
    renderContent: Function,
    value: {
      type: Array,
      default() {
        return []
      }
    },
    format: {
      type: Object,
      default() {
        return {}
      }
    },
    filterable: Boolean,
    props: {
      type: Object,
      default() {
        return {
          label: 'label',
          key: 'key',
          disabled: 'disabled'
        }
      }
    },
    targetOrder: {
      type: String,
      default: 'original'
    }
  },

  data() {
    return {
      leftChecked: [],
      rightChecked: [],
      list: [],
      leftData: [],
      rightData: [],
      rightId: [],
      AllId: []
    }
  },

  computed: {
    dataObj() {
      const key = this.props.key
      return this.data.reduce((o, cur) => (o[cur[key]] = cur) && o, {})
    },

    sourceData() {
      var data = []
      if (this.isTransferTree) {
        data = this.leftData
      } else {
        data = this.data.filter((item) => this.value.indexOf(item[this.props.key]) === -1)
      }
      return data
    },

    targetData() {
      if (this.targetOrder === 'original') {
        var data = []
        if (this.isTransferTree) {
          data = this.rightData
        } else {
          data = this.data.filter((item) => this.value.indexOf(item[this.props.key]) > -1)
        }
        return data
      } else {
        return this.value.reduce((arr, cur) => {
          const val = this.dataObj[cur]
          if (val) {
            arr.push(val)
          }
          return arr
        }, [])
      }
    },

    hasButtonTexts() {
      return this.buttonTexts.length === 2
    }
  },

  watch: {
    value(val) {
      this.dispatch('ElFormItem', 'el.form.change', val)

      this.leftData = this.deleteTree(this.data, val)
    }
  },

  methods: {
    getList(data) {
      halfCheckedKeys = data
    },
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
    deleteTree(tree, deleteId) {
      this.AllId = []
      let treeData = JSON.parse(JSON.stringify(tree))
      const deleteParentNode = (data) => {
        const ret = []
        for (let i = 0, l = data.length; i < l; i++) {
          const node = data[i]
          this.AllId.push(data[i].id)
          if (deleteId.indexOf(node.id) == -1) {
            ret.push(node)
          }
          if (node.children && node.children !== undefined) {
            node.children = deleteParentNode(node.children)
          }
        }
        return ret
      }
      return deleteParentNode(treeData)
    },
    getMigratingConfig() {
      return {
        props: {
          'footer-format': 'footer-format is renamed to format.'
        }
      }
    },

    onSourceCheckedChange(val, movedKeys, allMove) {
      this.leftChecked = val
      // console.log(val, movedKeys)
      if (movedKeys === undefined) return

      if (!this.buttonArrows || allMove != undefined) {
        this.addToRight()
      }

      this.$emit('left-check-change', val, movedKeys)
    },

    onTargetCheckedChange(val, movedKeys, allMove) {
      this.rightChecked = val
      if (movedKeys === undefined) return
      if (!this.buttonArrows || allMove != undefined) {
        this.addToLeft()
      }
      this.$emit('right-check-change', val, movedKeys)
    },

    addToLeft() {
      let currentValue = this.value.slice()
      var rightChecked = this.rightChecked
      console.log(rightChecked)
      if (this.isTransferTree) {
        var value_list = []
        this.rightChecked.map((item) => {
          value_list = [...new Set(value_list.concat(this.findPathByLeafId(item, this.data)))]
        })
        this.rightChecked = value_list
      }
      this.rightChecked.forEach((item) => {
        const index = currentValue.indexOf(item)
        if (index > -1) {
          currentValue.splice(index, 1)
        }
      })
      if (this.isTransferTree) {
        this.rightId = this.rightId.filter((item) => {
          return rightChecked.indexOf(item) == -1
        })

        var b = this.AllId.filter((item) => {
          return this.rightId.indexOf(item) == -1
        })

        this.rightData = this.deleteTree(this.data, b)
      }

      this.$emit('input', currentValue)
      this.$emit('change', currentValue, 'left', this.rightChecked)
    },

    addToRight() {
      let currentValue = this.value.slice()
      const itemsToBeMoved = []
      const key = this.isTransferTable || this.isTransferTree ? this.leftChecked : this.props.key

      if (this.isTransferTable || this.isTransferTree) {
        key.forEach((item, index) => {
          itemsToBeMoved.push(item)
        })
      } else {
        this.data.forEach((item) => {
          const itemKey = item[key]
          if (this.leftChecked.indexOf(itemKey) > -1 && this.value.indexOf(itemKey) === -1) {
            itemsToBeMoved.push(itemKey)
          }
        })
      }
      currentValue =
        this.targetOrder === 'unshift'
          ? [...new Set(itemsToBeMoved.concat(currentValue).sort((a, b) => a - b))]
          : [...new Set(currentValue.concat(itemsToBeMoved).sort((a, b) => a - b))]

      if (this.isTransferTree) {
        var value_list = []
        currentValue.map((item) => {
          value_list = [...new Set(value_list.concat(this.findPathByLeafId(item, this.data)))]
        })
        this.rightId = [...new Set(value_list)].sort((a, b) => a - b)
        var b = this.AllId.filter((item) => {
          return this.rightId.indexOf(item) == -1
        })

        this.rightData = this.deleteTree(this.data, b)
      }

      this.$emit('input', currentValue)
      this.$emit('change', currentValue, 'right', this.leftChecked)
    },

    clearQuery(which) {
      if (which === 'left') {
        this.$refs.leftPanel.query = ''
      } else if (which === 'right') {
        this.$refs.rightPanel.query = ''
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.leftData = this.deleteTree(this.data, this.value)
      var value_list = [] //如果没有了子节点，父节点也相应的转移
      this.value.map((item) => {
        value_list = [...new Set(value_list.concat(this.findPathByLeafId(item, this.data)))]
      })
      this.rightId = value_list
      var b = this.AllId.filter((item) => {
        return this.rightId.indexOf(item) == -1
      })

      // this.rightId = this.value
      this.rightData = this.deleteTree(this.data, b)
    })
  }
}
</script>
