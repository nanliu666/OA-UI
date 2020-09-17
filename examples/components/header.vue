<template>
  <div class="headerWrapper">
    <header
      ref="header"
      class="header"
    >
      <div class="header-box">
        <img
          class="logo-image"
          :src="imgModules.logo"
        >
        <img
          class="system-image"
          :src="imgModules.title"
        >
      </div>
    </header>
  </div>
</template>

<script type="text/babel">
import { improtAllFiles } from '../util'
export default {
  data() {
    return {
      imgModules: {}
    }
  },
  created() {
    this.imgModules = improtAllFiles(
      require.context('../assets/images/header', false, /\.png$/),
      '.png'
    )
  },
  methods: {}
}
</script>
<style lang="less">
.headerWrapper {
  height: 80px;
}

.header {
  box-shadow: 0px 4px 8px -2px rgba(#000000, 0.16);
  height: 80px;
  background-color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 80px;
  z-index: 100;
  position: relative;
  .header-box {
    height: 100%;
    width: 1140px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo-image {
      width: 130px;
      height: 32px;
    }
    .system-image {
      width: 107px;
      height: 14px;
    }
  }
}
</style>
