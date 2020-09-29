## Anchor锚点
 用于跳转到页面指定位置。 
<!-- 详细文档见[Ant-Design-Vue Anchor](https://antdv.com/components/anchor-cn/) -->
### 何时使用
需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

### 基础用法
  
:::demo
```html
<template>
  <a-anchor :getContainer="getContainer" >
    <a-anchor-link href="#ji-chu-yong-fa" title="Basic demo" />
    <a-anchor-link href="#jing-tai-wei-zhi" title="Static demo" />
    <a-anchor-link
      href="#ji-chu-yong-fa"
      title="Basic demo with Target"
      target="_blank"
    />
    <a-anchor-link href="#she-zhi-pian-yi-liang" title="Set offset">
      <a-anchor-link href="#anchor-props" title="Anchor Props" />
      <a-anchor-link href="#link-props" title="Link Props" />
    </a-anchor-link>
  </a-anchor>
  </a-anchor>
</template>
<script>
export default {
  methods:{
    getContainer(){
      return document.querySelector(".page-component__scroll")
    }
  }
}
  </script>
```
:::
### 静态位置
:::demo 不浮动，状态不随页面滚动变化。
```html
<template>
  <a-anchor :affix="false" :getContainer="getContainer">
    <a-anchor-link href="#ji-chu-yong-fa" title="Basic demo" />
    <a-anchor-link href="#jing-tai-wei-zhi" title="Static demo" />
    <a-anchor-link href="#she-zhi-pian-yi-liang" title="Set offset"/>
  </a-anchor>
</template>
<script>
export default {
  methods:{
    getContainer(){
      return document.querySelector(".page-component__scroll")
    }
  }
}
  </script>
```
:::

### 设置偏移量
#### Anchor-Props
#### Link-Props
:::demo 设置锚点滚动偏移量,使锚点目标滚动到屏幕正中间。
```html
<template>
  <a-anchor :target-offset="targetOffset" :getContainer="getContainer" :affix="false">
    <a-anchor-link href="#ji-chu-yong-fa" title="Basic demo" />
    <a-anchor-link href="#jing-tai-wei-zhi" title="Static demo" />
    <a-anchor-link href="#she-zhi-pian-yi-liang" title="Set offset"/>
  </a-anchor>
</template>
<script>
export default {
  data() {
    return {
      targetOffset: undefined,
    };
  },
  mounted() {
    this.targetOffset = document.querySelector(".page-component__scroll").offsetHeight / 2;
  },
  methods:{
    getContainer(){
      return document.querySelector(".page-component__scroll")
    }
  }
};
</script>

```
:::