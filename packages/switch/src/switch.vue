<template>
  <span :class="[size=='mini'?'mg-switch-size':'']">
    <el-switch v-bind="$attrs" v-on="$listeners" :width="width"></el-switch>
  </span>
</template>

<script>
export default {
  name: 'MgSwitch',
  mgName: 'MgSwitch',
  data(){
    return {
      width:this.size=='mini'?28:44
    }
  },
  props: {
    size: {
      type:String,
      default:'small'
    }
  }
}
</script>

<style lang="scss">
.mg-switch-size {
  .el-switch__core {
    height: 16px;
  }
  .el-switch__core:after {
    width: 12px;
    height: 12px;
  }
 
  .el-switch.is-checked .el-switch__core::after{
    margin-left: -14px;
  }
}
</style>