<template>
  <el-input
    placeholder="请输入内容"
    v-model="input"
    :statusType = "statusType"
  >
  </el-input>
</template>

<script>
    export default {
      mgName: 'input',
        data(){
          return {
            input: '',
            statusType:{
              type: String,
              default: "default"
            }
          }
        },
      mounted() {
          console.log(this.statusType);
      }
    }
</script>

<style scoped>

</style>
