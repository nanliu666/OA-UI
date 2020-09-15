<template>
  <div>
    <mg-comment v-model="input" />
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
      value: null,
      inputStatusType: 'error',
      options: [
        {
          label: '搜索建议',
          options: [
            {
              label: 'foo',
              value: 'foo',
              disabled: true
            },
            'bar' // 简短形式
          ]
        }
      ]
    }
  },

  mounted() {},

  methods: {
    test() {
      console.debug({ arguments })
    }
  }
}
</script>
