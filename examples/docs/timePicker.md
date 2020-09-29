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

### 底栏操作区
:::demo
```html
<template>
  <div>
    <a-time-picker :open.sync="open2">
      <div slot="addon" style="display: flex;justify-content: flex-end;">
        <a-button size="small" type="primary" @click="handleClose">
          确定
        </a-button>
      </div>
    </a-time-picker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false,
      open2: false,
    };
  },
  methods: {
    handleOpenChange(open) {
      console.log('open', open);
      this.open = open;
    },
    handleClose() {
      this.open = false;
      this.open2 = false;
    },
  },
};
</script>
```
:::

### 禁用
:::demo
```html
<template>
  <a-time-picker  disabled />
</template>
```
:::

