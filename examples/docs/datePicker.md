## DatePicker日期选择框
输入或选择日期的控件。
  
### 何时使用
当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

### 基础用法
  
:::demo
```html
<template>
  <div>
    <a-date-picker @change="onChange" />
    <br />
    <a-month-picker placeholder="Select month" @change="onChange" />
    <br />
    <a-range-picker @change="onChange" />
    <br />
    <a-week-picker placeholder="Select week" @change="onChange" />
  </div>
</template>
<script>
export default {
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  },
};
</script>

```
:::

