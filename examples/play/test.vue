<template>
  <div class="test" />
</template>

<script>
export default {
  name: 'Test',
  props: {
    testA: String
  },
  mounted() {
    console.log(this.$props)
  }
}
</script>

<style lang="less" scoped>
.test {
}
</style>
