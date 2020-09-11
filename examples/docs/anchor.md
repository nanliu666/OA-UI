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
          <h2 :id="item.href">
            <a class="anchor" :href="`#${item.href}`">
              <i class="el-icon-link" />
            </a>
            {{item.label}}
          </h2>
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
<style lang="scss">
ul,
li {
  padding: 0;
  margin: 0;
  list-style-type: none;
  box-sizing: border-box;
}
.anchor-demo-ul {
  h2 {
    font-size: 35px;
    line-height: 1.2;
    &::before {
      content: ' ';
      display: block;
      border-bottom: 1px solid #ececec;
      padding-top: 44px;
      margin-bottom: 40px;
    }
    .anchor {
      float: left;
      padding-right: 4px;
      margin-left: -20px;
    }
  }
  .anchor-demo-box {
    width: 100%;
    height: 500px;
    margin: 10px 0;
    color: #fff;
  }

  .demo-0 {
    background-color: #207efa;
  }
  .demo-1 {
    background-color: #d56779;
  }
  .demo-2 {
    background-color: #5bc077;
  }
  .demo-3 {
    background-color: #dbc226;
  }
}
</style>
```
:::
### Attributes

| 参数        | 说明                           | 类型   | 可选值 | 默认值 |
| ----------- | ------------------------------ | ------ | ------ | ------ |
| anchorLinks | 锚点数组                       | array  |        |        |
| title       | 文字内容                       | string |        |        |
| target      | 包裹容器，注意使用时的滚动容器 | string |        |        |
+ **<font color='black'>1. 如果锚点不能跳转，请检查你的包裹容器 </font>**
+ **<font color='black'>2. 注意使用时需要在相关地方绑定id（demo内有示例） </font>**
+ **<font color='black'>3. 不支持所有IE版本 </font>**