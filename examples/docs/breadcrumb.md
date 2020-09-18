## Breadcrumb面包屑 

显示当前页面在系统层级结构中的位置，并能向上返回。

### 何时使用

* 当系统拥有超过两级以上的层级结构时；
* 当需要告知用户『你在哪里』时；
* 当需要向上导航的功能时。

### 基础用法

:::demo
```html
<template>
  <a-breadcrumb>
    <a-breadcrumb-item>Home</a-breadcrumb-item>
    <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
    <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
    <a-breadcrumb-item>An Application</a-breadcrumb-item>
  </a-breadcrumb>
</template>
```
:::

### 带图标

:::demo
```html
<template>
  <a-breadcrumb>
    <a-breadcrumb-item href="">
      <a-icon type="home" />
    </a-breadcrumb-item>
    <a-breadcrumb-item href="">
      <a-icon type="user" />
      <span>Application List</span>
    </a-breadcrumb-item>
    <a-breadcrumb-item>
      Application
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>
```
:::
