## Avatar头像
  
<!-- 详细文档见[Ant-Design-Vue Avatar](https://antdv.com/components/avatar-cn/) -->
### 定义
用图片、图标或者字符的形式来表示用户或事物信息
### 何时使用
当用户需要作为一个形象展示时
### 基础用法
+ 上传的头像不可拉伸或者挤压
+ 上传的头像可以进行等比缩放以适应展示区大小
+ 上传的头像图片如果超长或超高，建议自动截取图片中间，或者配置裁切

### 基本 - 头像有三种尺寸，两种形状可选。
:::demo 
```html
<template>
  <div>
    <div>
      <a-avatar :size="64" icon="user" />
      <a-avatar size="large" icon="user" />
      <a-avatar icon="user" />
      <a-avatar size="small" icon="user" />
    </div>
    <br />
    <div>
      <a-avatar shape="square" :size="64" icon="user" />
      <a-avatar shape="square" size="large" icon="user" />
      <a-avatar shape="square" icon="user" />
      <a-avatar shape="square" size="small" icon="user" />
    </div>
  </div>
</template>
```
:::
### 带徽标的头像 - 通常用于消息提示。
:::demo
```html
<template>
  <div>
    <span style="margin-right:24px">
      <a-badge :count="1"><a-avatar shape="square" icon="user"/></a-badge>
    </span>
    <span>
      <a-badge dot><a-avatar shape="square" icon="user"/></a-badge>
    </span>
  </div>
</template>
```
:::

