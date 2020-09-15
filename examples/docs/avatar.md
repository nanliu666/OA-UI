# Avatar 头像

基于 elementUI Avatar组件 封装的 Avatar组件（[element 示例](https://element.eleme.cn/#/zh-CN/component/avatar)）
### 基础用法
最基础用法，只传入通过 `nickName` 显示用户名称
<br/>
头像内内容显示次序：
+ 存在图片，优先显示图片
+ 不存在图片，存在nick-name，显示nickName（中文取最后两个字符，非中文取前两个字符）
+ 不存在图片，且不存在nick-name，显示默认图片
  
:::demo 
```html
<template>
  <div class="avator-demo-nickName">
    <mg-avatar :src="avatarImage" :nick-name="nickNameEnglish"/>
    <mg-avatar :nick-name="nickNameEnglish"/>
    <mg-avatar :nick-name="nickNameChinese"/>
    <mg-avatar />
  </div>
</template>
<script>
export default {
  data() {
    return {
      avatarImage: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      nickNameChinese: "古天乐",
      nickNameEnglish: "Aaron",
    }
  }
}
</script>
```
:::

### 圆框/方框以及四种尺寸展示demo


:::demo 
```html
<template>
  <el-row class="demo-avatar demo-basic">
    <el-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block" v-for="size in sizeList" :key="size">
          <mg-avatar :size="size" :src="avatarImage"></mg-avatar>
        </div>
      </div>
    </el-col>  
    <el-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block" v-for="size in sizeList" :key="size">
          <mg-avatar shape="square" :size="size" :src="squareUrl" :nick-name="nickName"></mg-avatar>
        </div>
      </div>
    </el-col> 
  </el-row>
</template>
<script>
  export default {
  data() {
    return {
      sizeList: ["huge", "large", "medium", "small", ],
      nickName: "测试",
      avatarImage: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      size: "huge",
      src: "",
      fit: "",
      shape: "circle",
      srcSet: "",
      alt: "",
      icon: ""
    }
  },
}
</script>
```
:::

### Attributes

| 参数     | 说明                                                               | 类型          | 可选值                                     | 默认值 |
| -------- | ------------------------------------------------------------------ | ------------- | ------------------------------------------ | ------ |
| nickName | 可搭配展示用户名称                                                 | string        |                                            |        |
| icon     | 设置头像的图标类型，参考 Icon 组件                                 | string        |                                            |        |
| size     | 设置头像的大小                                                     | number/string | number / huge / large / medium / small     | large  |
| shape    | 设置头像的形状                                                     | string        | circle / square                            | circle |
| src      | 图片头像的资源地址                                                 | string        |                                            |        |
| srcSet   | 以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像 | string        |                                            |        |
| alt      | 描述图像的替换文本                                                 | string        |                                            |        |
| fit      | 当展示类型为图片的时候，设置图片如何适应容器框                     | string        | fill / contain / cover / none / scale-down | cover  |

