<template>
  <div>
    11
  </div>
</template>
<script>
import Emitter from "main/mixins/elFormEmitter"
export default {
  name: "MgList",
  mixins: [Emitter],
  props: {
    bordered: {
      type: Boolean,
      default: false
    },
    itemLayout: {
      type: String,
      default: 'vertical'  //vertical竖排 horizontal横排
    }
  },
  data() {
    return {
  
    }
  },
  created() {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
