## Popconfirm气泡提示框
  
<!-- 详细文档见[Ant-Design-Vue Popconfirm](https://antdv.com/components/popconfirm-cn/) -->
### 何时使用
目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。

和 ‘confirm’ 弹出的全屏居中模态对话框相比，交互形式更轻量。

### 基础用法
  
:::demo
```html
<template>
  <a-popconfirm
    title="Are you sure delete this task?"
    ok-text="Yes"
    cancel-text="No"
    @confirm="confirm"
    @cancel="cancel"
  >
    <a href="#">Delete</a>
  </a-popconfirm>
</template>
<script>
export default {
  methods: {
    confirm(e) {
      console.log(e);
      this.$message.success('Click on Yes');
    },
    cancel(e) {
      console.log(e);
      this.$message.error('Click on No');
    },
  },
};
</script>
```
:::

### 国际化
使用 okText 和 cancelText 自定义按钮文字。
:::demo
```html
<template>
  <a-popconfirm title="Are you sure？" ok-text="Yes" cancel-text="No">
    <a href="#">Delete</a>
  </a-popconfirm>
</template>
```
:::

