## Card卡片
  
<!-- 详细文档见[Ant-Design-Vue Card](https://antdv.com/components/card-cn/) -->
### 定义
将信息聚合或提炼在一个容器中做可视化展示
### 何时使用
+ 当有一组相关信息或类似的任务组和在一起时
+ 当需要做提炼内容的可视化展示时

### 通用规则
+ 一个卡片中的内容是同类型的，或者是针对同一对象的信息聚合
+ 同类卡片组和使用时，样式及交互应该保持一致
+ 不建议卡片内嵌套卡片
+ 当整个卡片可点击的时候，需要给出明确指示

### 典型卡片 
 包含标题、内容、操作区域。
可通过设置size为default或者small，控制尺寸
### 基础用法
  
:::demo
```html
<template>
  <div>
    <a-card title="Default size card" style="width: 300px">
      <a slot="extra" href="#">more</a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
    <br />
    <a-card size="small" title="Small size card" style="width: 300px">
      <a slot="extra" href="#">more</a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
  </div>
</template>
```
:::
### 无边框 
  在灰色背景上使用无边框的卡片
:::demo
```html
<template>
  <div style="background:#ECECEC; padding:30px">
    <a-card title="Card title" :bordered="false" style="width: 300px">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
  </div>
</template>
```
:::

