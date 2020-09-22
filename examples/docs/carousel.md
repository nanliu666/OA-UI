## Carousel走马灯
  
<!-- 详细文档见[Ant-Design-Vue Carousel](https://antdv.com/components/carousel-cn/) -->
### 定义
幻灯片轮播组件，用于在一定区域内循环展示图像或文本等元素。
### 何时使用
+ 当有一组平级的内容。
+ 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
+ 常用于图片、文本或卡片轮播，可以是单张或者成组内容。

### 基础用法
  
:::demo
```html
<template>
  <a-carousel :after-change="onChange">
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
</template>
<script>
export default {
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c);
    },
  },
};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
```
:::

### 位置
位置有 4 个方向。
  
:::demo
```html
<template>
  <div>
    <a-radio-group v-model="dotPosition" style="margin-bottom: 8px">
      <a-radio-button value="top">
        Top
      </a-radio-button>
      <a-radio-button value="bottom">
        Bottom
      </a-radio-button>
      <a-radio-button value="left">
        Left
      </a-radio-button>
      <a-radio-button value="right">
        Right
      </a-radio-button>
    </a-radio-group>
    <a-carousel :dot-position="dotPosition">
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </a-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dotPosition: 'top',
    };
  },
};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
```
:::

