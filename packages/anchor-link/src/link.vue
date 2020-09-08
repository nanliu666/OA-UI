<template>
  <div class="anthorLi">
    <a :href="href">{{ title }}<slot /></a>
  </div>
</template>

<script>
export default {
  name: 'MgAnchorLink',
  mgName: 'MgAnchorLink',
  props: {
    href: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.anthorLi {
  height: 22px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #202940;
  line-height: 22px;
  margin-bottom: 15px;
  cursor: pointer;
  a {
    color: #202940;
  }
  a:hover {
    color: #207efa;
  }
}
</style>
