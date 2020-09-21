## Spin加载中
  
<!-- 详细文档见[Ant-Design-Vue Spin](https://antdv.com/components/spin-cn/) -->
### 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。
### 基础用法
  
:::demo
```html
<template>
  <div>
    <a-spin />
  </div>
</template>
```
:::

### 各种大小
小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。
:::demo
```html
<template>
  <div>
    <a-spin size="small" />
    <a-spin />
    <a-spin size="large" />
  </div>
</template>
```
:::
