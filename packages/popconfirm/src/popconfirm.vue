<template>
  <mg-popover
    v-model="visible"
    v-bind="$attrs"
    trigger="click"
  >
    <div class="el-popconfirm">
      <p class="el-popconfirm__main">
        <i
          v-if="!hideIcon"
          :class="icon"
          class="el-popconfirm__icon"
          :style="{ color: iconColor }"
        />
        {{ title }}
      </p>
      <div v-if="!hideActionSlot">
        <slot name="action" />
      </div>

      <div
        v-if="hideActionSlot"
        class="el-popconfirm__action"
      >
        <el-button
          size="mini"
          :type="cancelButtonType"
          @click="cancel"
        >
          {{ cancelButtonText }}
        </el-button>
        <el-button
          size="mini"
          :type="confirmButtonType"
          @click="confirm"
        >
          {{ confirmButtonText }}
        </el-button>
      </div>
    </div>
    <slot
      slot="reference"
      name="reference"
    />
  </mg-popover>
</template>

<script>
import MgPopover from "../../popover"
import ElButton from "element-ui/packages/button"

export default {
  name: "MgPopconfirm",
  components: {
    MgPopover,
    ElButton
  },
  props: {
    hideActionSlot: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ""
    },
    confirmButtonText: {
      type: String,
      default: "确定"
    },
    cancelButtonText: {
      type: String,
      default: "取消"
    },
    confirmButtonType: {
      type: String,
      default: "primary"
    },
    cancelButtonType: {
      type: String,
      default: "text"
    },
    icon: {
      type: String,
      default: "el-icon-question"
    },
    iconColor: {
      type: String,
      default: "#f90"
    },
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    confirm() {
      this.visible = false
      this.$emit("onConfirm")
    },
    cancel() {
      this.visible = false
      this.$emit("onCancel")
    }
  }
}
</script>
