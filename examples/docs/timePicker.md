## TimePicker时间选择框
输入或选择时间的控件。 
<!-- 详细文档见[Ant-Design-Vue TimePicker](https://antdv.com/components/timePicker-cn/) -->
### 何时使用
当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

### 基础用法
  
:::demo
```html
<template>
  <a-time-picker  @change="onChange" />
</template>
<script>
// import moment from 'moment';
export default {
  methods: {
    onChange(time, timeString) {
      console.log(time, timeString);
    },
  },
};
</script>

```
:::

