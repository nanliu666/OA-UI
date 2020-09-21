## Message全局提示
  
<!-- 详细文档见[Ant-Design-Vue Message](https://antdv.com/components/message-cn/) -->
### 何时使用
+ 可提供成功、警告和错误等反馈信息。
+ 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

### 基础用法
  
:::demo
```html
<template>
  <a-button type="primary" @click="info">
    Display normal message
  </a-button>
</template>
<script>
export default {
  methods: {
    info() {
      this.$message.info('This is a normal message');
    },
  },
};
</script>
```
:::

### 修改延时

自定义时长 10s，默认时长为 3s。

:::demo
```html
<template>
  <a-button @click="success">
    Customized display duration
  </a-button>
</template>
<script>
export default {
  methods: {
    success() {
      this.$message.success(
        'This is a prompt message for success, and it will disappear in 10 seconds',
        10,
      );
    },
  },
};
</script>
```
:::