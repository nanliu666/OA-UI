## Process进度条
  
<!-- 详细文档见[Ant-Design-Vue Process](https://antdv.com/components/process-cn/) -->
### 何时使用
在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

+ 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；
+ 当需要显示一个操作完成的百分比时。
+ 不支持自定义数值位置
+ 不支持步骤器进度条

### 基础用法
  
:::demo
```html
<template>
  <div>
    基础
    <a-progress :percent="30" />
    进行中
    <a-progress :percent="50" status="active" />
    错误状态
    <a-progress :percent="70" status="exception" />
    完成状态
    <a-progress :percent="100" />
    不显示进度数值或状态图标
    <a-progress :percent="50" :show-info="false" />
    渐变色
      <a-progress
      :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
      :percent="99.9"
    />
  </div>
</template>
```
:::

### 进度圈
（仪表盘进度条以及环状进度条）
:::demo
```html
<template>
  <div>
    <a-progress type="circle" :percent="75" />
    <a-progress type="circle" :percent="70" status="exception" />
    <a-progress type="circle" :percent="100" />
    <a-progress :percent="60" :success-percent="30" type="dashboard" />
    
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


### 动态展示
会动的进度条才是好进度条。
:::demo
```html
<template>
  <div>
    <a-progress :percent="percent" />
    <a-button-group>
      <a-button icon="minus" @click="decline" />
      <a-button icon="plus" @click="increase" />
    </a-button-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      percent: 0,
    };
  },
  methods: {
    increase() {
      let percent = this.percent + 10;
      if (percent > 100) {
        percent = 100;
      }
      this.percent = percent;
    },
    decline() {
      let percent = this.percent - 10;
      if (percent < 0) {
        percent = 0;
      }
      this.percent = percent;
    },
  },
};
</script>
```
:::