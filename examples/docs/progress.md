## Process进度条
  
<!-- 详细文档见[Ant-Design-Vue Process](https://antdv.com/components/process-cn/) -->
### 何时使用
在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

+ 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；
+ 当需要显示一个操作完成的百分比时。

### 基础用法
  
:::demo
```html
<template>
  <div>
    <a-progress :percent="30" />
    <a-progress :percent="50" status="active" />
    <a-progress :percent="70" status="exception" />
    <a-progress :percent="100" />
    <a-progress :percent="50" :show-info="false" />
  </div>
</template>
```
:::

### 进度圈

圈形的进度。
:::demo
```html
<template>
  <div>
    <a-progress type="circle" :percent="75" />
    <a-progress type="circle" :percent="70" status="exception" />
    <a-progress type="circle" :percent="100" />
  </div>
</template>
<style scoped>
.ant-progress-circle-wrap,
.ant-progress-line-wrap {
  margin-right: 8px;
  margin-bottom: 5px;
}
</style>
```
:::