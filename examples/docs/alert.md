## Alert警告提示
  
<!-- 详细文档见[Ant-Design-Vue Alert](https://antdv.com/components/alert-cn/) -->
### 何时使用

+ 当某个页面需要向用户显示警告的信息时。
+ 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。
  
### 基本
最简单的用法，适用于简短的警告提示。
  
:::demo
```html
<template>
  <a-alert message="Success Text" type="success" />
</template>
```
:::
### 顶部公告
页面顶部通告形式，默认有图标且type 为 'warning'
  
:::demo
```html
<template>
  <div>
    <a-alert message="Warning text" banner />
    <br />
    <a-alert
      message="Very long warning text warning text text text text text text text"
      banner
      closable
    />
    <br />
    <a-alert :show-icon="false" message="Warning text without icon" banner />
    <br />
    <a-alert type="error" message="Error text" banner />
  </div>
</template>
```
:::

