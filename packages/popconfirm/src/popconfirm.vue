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
      <div class="el-popconfirm__action">
        <el-checkbox
          v-if="isShowChecked"
          v-model="tipsChecked"
          class="no-tips"
          @change="tipsChange"
        >
          不再提示
        </el-checkbox>
        <div class="button-box">
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
    isShowChecked: {
      type: Boolean,
      default: false
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
      visible: false,
      tipsChecked: false,
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
    },
    tipsChange() {
      this.$emit("onTipsChange")
    }
  }
}
</script>
<style lang="scss">
.el-popconfirm__action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .no-tips {
        color: #757C85;
        .el-checkbox__label {
            font-size: 12px;
        }
    }
    .button-box {
      // align-self: flex-end;
      flex: 1;
    }
}
</style>
