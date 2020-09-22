<template>
  <div class="mg-common-table">
    <div
      v-if="rowSelection"
      v-show="selectedRowKeys.length"
      class="multi-menu"
    >
      <span style="margin-left:12px;">已选中{{ selectedRowKeys.length }}项</span>
      <el-divider direction="vertical" />
      <slot
        name="multiSelectMenu"
        v-bind="{
          selectedRowKeys
        }"
      />
      <i class="el-icon-close btn-close" />
    </div>
    <!--顶部操作栏占位，勾选行时不显示-->
    <div
      v-if="$slots.topMenu"
      v-show="!selectedRowKeys.length"
      class="top-menu"
    >
      <slot name="topMenu" />
    </div>
    <a-table
      v-bind="aTableProps"
      :columns="columns"
      :row-selection="_rowSelection"
      :pagination="pagination"
      v-on="aTableEvents"
      @change="handleChange"
    >
      <template
        v-for="slotName of aTableSlots"
        #[slotName]="text,row,index"
      >
        <slot
          :name="slotName"
          v-bind="{ row, text, index }"
        />
      </template>
    </a-table>
  </div>
</template>

<script>
import { A_TABLE_PROPS, getATablePropDefault } from './utils/config'

export default {
  name: 'MgTable',

  props: {
    page: {
      type: Object,
      default: () => ({})
    },

    rowSelection: {
      type: [Boolean, Object],
      default: null
    },

    handlerConfig: {
      type: [Boolean, Object],
      default: true
    }
  },

  data() {
    return {
      selectedRowKeys: []
    }
  },

  computed: {
    aTableEvents() {
      const events = {}
      const IGNORE_EVENTS = ['change']
      const { $listeners } = this
      for (const key in $listeners) {
        if (!IGNORE_EVENTS.includes(key)) {
          events[key] = $listeners[key]
        }
      }
      return events
    },
    aTableProps() {
      const props = Object.assign({}, getATablePropDefault(this))
      const { $attrs } = this
      for (const key in $attrs) {
        if (A_TABLE_PROPS.includes(key)) {
          props[key] = $attrs[key]
        }
      }
      return props
    },
    aTableSlots() {
      const ANT_COMMON_TABLE_SLOTS = ['topMenu']
      return Object.keys(this.$scopedSlots).filter(
        (slotName) => !ANT_COMMON_TABLE_SLOTS.includes(slotName)
      )
    },

    columns() {
      const { columns } = this.aTableProps
      let handlerConfig =
        typeof this.handlerConfig === 'object'
          ? this.handlerConfig
          : this.handlerConfig && this.$scopedSlots.handler
          ? {
              title: '操作',
              dataIndex: '_handler',
              fixed: 'right',
              scopedSlots: { customRender: 'handler' }
            }
          : null
      return handlerConfig ? [...columns, handlerConfig] : columns
    },

    _rowSelection() {
      if (!this.rowSelection) {
        return null
      }
      if ('object' === typeof this.rowSelection) {
        return this.rowSelection
      } else {
        return {
          selectedRowKeys: this.selectedRowKeys,
          onChange: (...args) => {
            const [keys] = args
            this.selectedRowKeys = keys
            this.$emit('selectionChange', ...args)
          }
        }
      }
    },

    pagination() {
      const { pagination } = this.aTableProps
      return pagination
        ? pagination
        : {
            showTotal: (total) => `共 ${total} 条`,
            showSizeChanger: true,
            pageSize: 10,
            defaultCurrent: 1,
            ...this.page
          }
    }
  },

  methods: {
    // 事件注入 添加page.sync
    handleChange(pagination) {
      const { page } = this
      for (const key of ['current', 'pageSize', 'total']) {
        if (page[key] !== pagination[key]) {
          this.$emit('update:page', {
            current: pagination.current,
            pageSize: pagination.pageSize,
            total: pagination.total
          })
          break
        }
      }
      this.$emit('change', ...arguments)
    }
  }
}
</script>

<style lang="less">
.mg-common-table {
  /deep/ .row__active {
    background: #f7fcff;
  }
  .multi-menu {
    display: inline-block;
    width: 100%;
    line-height: 40px;
    height: 40px;
    margin-bottom: 12px;
  }
  .multi-menu .el-button {
    padding-top: 0;
    padding-bottom: 0;
  }
  .btn-close {
    line-height: 40px;
    margin-right: 10px;
    float: right;
    cursor: pointer;
  }
  .top-menu {
    height: 40px;
    margin-bottom: 12px;
  }
}
</style>
