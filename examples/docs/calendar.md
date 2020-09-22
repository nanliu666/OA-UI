## Calendar日历
  
<!-- 详细文档见[Ant-Design-Vue Calendar](https://antdv.com/components/calendar-cn/) -->
### 定义
按照日历形式展示数据的容器。
### 何时使用
当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。

### 基础用法
  一个通用的日历面板，支持年/月切换。
:::demo
```html
<template>
  <a-calendar @panelChange="onPanelChange" />
</template>
<script>
export default {
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode);
    },
  },
};
</script>
```
:::
### 卡片模式
用于嵌套在空间有限的容器中。
:::demo
```html
<template>
  <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
    <a-calendar :fullscreen="false" @panelChange="onPanelChange" />
  </div>
</template>
<script>
export default {
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode);
    },
  },
};
</script>
```
:::


