<style scoped></style>
<template>
  <a-locale-provider :locale="locale">
    <div
      id="app"
      :class="{ 'is-component': isComponent }"
    >
      <main-header />
      <div class="main-cnt">
        <router-view />
      </div>
    </div>
  </a-locale-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  name: 'App',
  data() {
    return {
      locale: zhCN
    }
  },
  computed: {
    isComponent() {
      return /^component-/.test(this.$route.name || '')
    }
  }
}
</script>
