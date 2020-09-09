# Anchor 描点

### 基础用法
最基础用法 
:::demo
```html
<template>
  <div>
    <mg-anchor :anchorLinks="anchorLinks" target=".page-component__scroll .el-scrollbar__wrap">
      <ul class="anchor-demo-ul">
        <li v-for="(item, index) in anchorLinks" :key="index">
          <div :id="item.href">{{item.label}}</div>
          <div class="anchor-demo-box" :class="'demo-' + index"></div>
        </li>
      </ul>
    </mg-anchor>
  </div>
</template>
<script>
export default {
  data() {
    return {
      anchorLinks: [
        {
          href: 'href1',
          label: '标签1'
        },
        {
          href: 'href2',
          label: '标签2'
        },
        {
          href: 'href3',
          label: '标签3'
        },
        {
          href: 'href4',
          label: '标签4'
        },
      ]
    }
  },
}
</script>
```
:::
### Attributes

| 参数        | 说明                           | 类型   | 可选值 | 默认值 |
| ----------- | ------------------------------ | ------ | ------ | ------ |
| anchorLinks | 锚点数组                       | array  |        |        |
| title       | 文字内容                       | string |        |        |
| target   | 包裹容器，注意使用时的滚动容器 | string |        |        |
+ **<font color='red'>1. 如果锚点不能跳转，请检查你的包裹容器 </font>**
+ **<font color='red'>2. 注意使用时需要在相关地方绑定id（demo内有示例） </font>**