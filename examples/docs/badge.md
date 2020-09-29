## Badge徽标数
图标右上角的圆形徽标数字。
  
### 何时使用
一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

### 基础用法
  
:::demo
```html
<template>
  <div>
    <a-badge count="5">
      <a href="#" class="head-example" />
    </a-badge>
    <a-badge count="0" show-zero>
      <a href="#" class="head-example" />
    </a-badge>
    <a-badge>
      <a-icon slot="count" type="clock-circle" style="color: #f5222d" />
      <a href="#" class="head-example" />
    </a-badge>
  </div>
</template>

```
:::
### 封顶数字
:::demo
```html
<template>
  <div>
    <a-badge :count="99">
      <a href="#" class="head-example" />
    </a-badge>
    <a-badge :count="100">
      <a href="#" class="head-example" />
    </a-badge>
    <a-badge :count="99" :overflow-count="10">
      <a href="#" class="head-example" />
    </a-badge>
    <a-badge :count="1000" :overflow-count="999">
      <a href="#" class="head-example" />
    </a-badge>
  </div>
</template>

```
:::
