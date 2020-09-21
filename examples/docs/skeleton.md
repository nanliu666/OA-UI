## Skeleton骨架屏
  
<!-- 详细文档见[Ant-Design-Vue Skeleton](https://antdv.com/components/skeleton-cn/) -->
### 何时使用
+ 网络较慢，需要长时间等待加载处理的情况下。
+ 图文信息内容较多的列表/卡片中。
+ 只在第一次加载数据的时候使用。
+ 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。

### 基础用法
  
:::demo
```html
<template>
  <a-skeleton />
</template>
```
:::

### 复杂的组合
更复杂的组合。

:::demo
```html
<template>
  <a-skeleton avatar :paragraph="{ rows: 4 }" />
</template>
```
:::

