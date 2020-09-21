## Notification通知提醒框
  
<!-- 详细文档见[Ant-Design-Vue Notification](https://antdv.com/components/notification-cn/) -->
### 何时使用

在系统四个角显示通知提醒信息。经常用于以下情况：

+ 较为复杂的通知内容。
+ 带有交互的通知，给出用户下一步的行动点。
+ 系统主动推送。
### 基础用法
  
:::demo
```html
<template>
  <a-button type="primary" @click="openNotification">
    Open the notification box
  </a-button>
</template>
<script>
export default {
  methods: {
    openNotification() {
      this.$notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    },
  },
};
</script>
```
:::

### 自定义图标
图标可以被自定义。
:::demo
```html

<template>
  <a-button type="primary" @click="openNotification">
    Open the notification box
  </a-button>
</template>
<script>
export default {
  methods: {
    openNotification() {
      this.$notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        icon: <a-icon type="smile" style="color: #108ee9" />,
      });
    },
  },
};
</script>
```
:::

