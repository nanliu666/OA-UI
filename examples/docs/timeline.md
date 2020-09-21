## Timeline时间轴
  
<!-- 详细文档见[Ant-Design-Vue Timeline](https://antdv.com/components/timeline-cn/) -->
### 定义
以时间为主逻辑展示连续性信息
### 何时使用
+ 当有一系列信息需按时间排列时
+ 需要有一条时间轴进行视觉上的串联时

### 基础用法
  
:::demo
```html
<template>
  <a-timeline>
    <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
    <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
    <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
  </a-timeline>
</template>
```
:::

### 圆圈颜色
圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，蓝色可表示正在进行或其他默认状态。
:::demo
```html

<template>
  <a-timeline>
    <a-timeline-item color="green">
      Create a services site 2015-09-01
    </a-timeline-item>
    <a-timeline-item color="green">
      Create a services site 2015-09-01
    </a-timeline-item>
    <a-timeline-item color="red">
      <p>Solve initial network problems 1</p>
      <p>Solve initial network problems 2</p>
      <p>Solve initial network problems 3 2015-09-01</p>
    </a-timeline-item>
    <a-timeline-item>
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </a-timeline-item>
    <a-timeline-item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </a-timeline-item>
    <a-timeline-item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </a-timeline-item>
  </a-timeline>
</template>
```
:::

