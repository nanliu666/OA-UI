<template>
  <el-table-column
    v-if="column.slot"
    v-bind="elProps"
  >
    <slot
      slot-scope="scope"
      v-bind="scope"
    >
      <!-- slot用于展开行时column为空 -->
      {{ scope.column && scope.row[scope.column.property] }}
    </slot>
    <slot
      slot="header"
      slot-scope="scope"
      name="header"
      v-bind="scope"
    >
      {{ scope.column && scope.column.label }}
    </slot>
  </el-table-column>
  <el-table-column
    v-else
    v-bind="elProps"
  />
</template>

<script>
import { EL_TABLE_COLUMN_PROPS } from './config'

export default {
  props: {
    column: {
      type: Object,
      default: () => ({ showOverflowTooltip: true })
    }
  },
  computed: {
    _column() {
      return Object.assign({ showOverflowTooltip: true }, this.column)
    },
    elProps() {
      const copy = {}
      for (const key in this._column) {
        if (EL_TABLE_COLUMN_PROPS.includes(key)) {
          copy[key] = this._column[key]
        }
      }
      return copy
    }
  }
}
</script>

<style></style>
