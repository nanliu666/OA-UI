<template>
  <div>
    <a-input v-model="input" />
    <test test-a="a" />
  </div>
</template>
<style></style>
<script>
import Test from './test'
export default {
  components: {
    Test
  },
  data() {
    return {
      input: 'Hello Word!'
    }
  }
}
</script>
