<template>
  <div style="margin: 20px;">
    <mg-input
      v-model="input1"
      placeholder="请输入内容"
      :statusType = 'inputStatusType'
      :disabled="true"
    />
  </div>
</template>

<script>
  // import mgInput from '../'
  // import child from '../components/child.vue';
export default {
  data() {
    return {
      input: 'Hello Word!',
      input1: 'Hello',
      value: 'Hello',
      inputStatusType: 'error'
    }
  },
}
</script>
