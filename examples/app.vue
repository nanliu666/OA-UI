<style scoped></style>
<template>
  <div
    id="app"
    :class="{ 'is-component': isComponent }"
  >
    <!-- <main-header v-if="lang !== 'play'" /> -->
    <div class="main-cnt">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isComponent() {
      return /^component-/.test(this.$route.name || '')
    }
  }
}
</script>
