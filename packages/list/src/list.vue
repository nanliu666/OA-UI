<template>
  <div
    class="mg-list-style"
    :class="{ borderedClass: bordered }"
  >
    <div
      v-if="$slots.header"
      class="mg-list-header"
      :class="[`mg-list-header-${size}`, split ? 'mg-list-header-split' : '']"
    >
      <slot name="header" />
    </div>
    <ul>
      <li
        v-for="(item, index) in dataSource"
        :key="index"
        class="mg-list-item"
        :class="[`mg-list-item-${size}`, split ? 'mg-list-item-split' : '']"
      >
        <slot
          name="renderItem"
          :item="item"
          :index="index"
        />
      </li>
    </ul>
    <div
      v-if="$slots.footer"
      class="mg-list-footer"
      :class="`mg-list-footer-${size}`"
    >
      <slot name="footer" />
    </div>
    <slot name="loadMore" />
  </div>
</template>
<script>
export default {
  name: 'MgList',
  provide() {
    return {
      list: this
    }
  },
  props: {
    split: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'middle'
    },
    dataSource: {
      type: Array,
      default: function() {
        return []
      }
    },
    bordered: {
      type: Boolean,
      default: false
    },
    itemLayout: {
      type: String,
      default: 'vertical' //vertical竖排 horizontal横排
    }
  },
  data() {
    return {}
  },
  created() {
    // console.log('dataSource==', this)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.borderedClass {
  border: 1px solid #e3e7e9;
  border-radius: 4px;
}
div {
  box-sizing: border-box;
}
.mg-list-style {
  ul,
  li {
    list-style-type: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .mg-list-footer-small,
  .mg-list-header-small,
  .mg-list-item-small {
    padding: 8px 16px;
  }
  .mg-list-footer-middle,
  .mg-list-header-middle,
  .mg-list-item-middle {
    padding: 12px 24px;
  }
  .mg-list-footer-large,
  .mg-list-header-large,
  .mg-list-item-large {
    padding: 16px 24px;
  }
  .mg-list-header-split,
  .mg-list-item-split {
    border-bottom: 1px solid #e3e7e9;
  }
}
</style>
