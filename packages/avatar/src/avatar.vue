<template>
  <span class="mg-avatar">
    <el-avatar
      :size="avatarSize"
      :src="avatarSrc"
      :fit="fit"
      :icon="icon"
      :shape="shape"
      :src-set="srcSet"
      :alt="alt"
    >
      {{ avatarName }}
    </el-avatar>
  </span>
</template>

<script>
export default {
  name: "MgAvatar",
  props: {
    icon: {
      type: String,
      default: ""
    },
    shape: {
      type: String,
      default: "circle"
    },
    srcSet: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "large"
    },
    fit: {
      type: String,
      default: "cover"
    },
    src: {
      type: String,
      default: ""
    },
    nickName: {
      type: String,
      default: ""
    }
  },
  data() {
    return {}
  },
  computed: {
    avatarSrc() {
      // 图片和昵称都为空，显示一个默认的图片
      const condition = [this.src === '', this.nickName === '']
      const defaultSrc = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png' 
      return condition.every((item) => {return item}) ? defaultSrc : this.src
    },
    avatarSize() {
      return this.size === 'huge' ? 64 : this.size
    },
    avatarName() {
        let showName = ''
        if(this.src === "") {
            let reg =/[^\u4E00-\u9FA5]/
            // 规则第一个字符是不是中文开头，是取最后两个，不是取前两个
            showName =  reg.test(this.nickName.substr(0, 1)) ? this.nickName.substr(0, 2) : this.nickName.substring(this.nickName.length - 2)
        }
      return this.src !== "" ? '' : showName
    }
  },
  created() {},
  methods: {}
}
</script>

<style scoped lang="scss">
.mg-avatar {
  .mg-avatar-nickname {
    min-height: 20px;
    line-height: 20px;
    cursor: pointer;
    font-size: 14px;
    color: #545b66;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
