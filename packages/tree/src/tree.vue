<template>
  <el-tree
    ref="tree"
    class="mg-tree"
    :class="[noRotate ? 'no-rotate' : '']"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template
      v-if="$slots.default"
      #default="scope"
    >
      <slot v-bind="scope" />
    </template>
  </el-tree>
</template>

<script>
import { EL_TREE_PROPS, EL_TREE_PROPS_DEFAULT, EL_TREE_METHODS } from './config'

export default {
  name: 'MgTree',

  props: {
    // 禁用图标的旋转
    noRotate: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    elTreeProps() {
      const props = Object.assign({}, EL_TREE_PROPS_DEFAULT)
      const { $attrs } = this
      for (const key in $attrs) {
        if (EL_TREE_PROPS.includes(key)) {
          props[key] = $attrs[key]
        }
      }
      return props
    }
  },

  methods: {
    ...EL_TREE_METHODS.reduce((acc, method) => {
      acc[method] = function() {
        return this.$refs.tree[method](...arguments)
      }
      return acc
    }, {})
  }
}
</script>

<style lang="scss">
@import 'main/styles/var';
.mg-tree {
  .is-checked {
    color: $--color-primary;
    // background: rgba($--color-primary, 0.1);
    font-weight: bold;
  }
}
.no-rotate {
  span.el-tree-node__expand-icon.expanded {
    transform: rotate(0);
  }
}
</style>
