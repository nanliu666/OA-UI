## 下拉菜单

向下弹出的列表。


### 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

### 基础用法

:::demo
```html
<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click="e => e.preventDefault()">
      Hover me <a-icon type="down" />
    </a>
    <a-menu slot="overlay">
      <a-menu-item>
        <a href="javascript:;">1st menu item</a>
      </a-menu-item>
      <a-menu-item>
        <a href="javascript:;">2nd menu item</a>
      </a-menu-item>
      <a-menu-item>
        <a href="javascript:;">3rd menu item</a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>
```
:::

### 带按钮的下拉框

:::demo 左边是按钮，右边是额外的相关功能菜单。可设置 icon 属性来修改右边的图标。
```html
<template>
  <div>
    <a-dropdown-button @click="handleButtonClick">
      Dropdown
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
      </a-menu>
    </a-dropdown-button>
    <a-dropdown-button>
      Dropdown
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
      </a-menu>
      <a-icon slot="icon" type="user" />
    </a-dropdown-button>
    <a-dropdown-button disabled style="margin-left: 8px" @click="handleButtonClick">
      Dropdown
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
      </a-menu>
    </a-dropdown-button>
    <a-dropdown>
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
      </a-menu>
      <a-button style="margin-left: 8px"> Button <a-icon type="down" /> </a-button>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    handleButtonClick(e) {
      console.log('click left button', e);
    },
    handleMenuClick(e) {
      console.log('click', e);
    },
  },
};
</script>
```
:::

### 点击触发下拉菜单
:::demo
```html
<template>
  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" @click="e => e.preventDefault()">
      Click me <a-icon type="down" />
    </a>
    <a-menu slot="overlay">
      <a-menu-item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </a-menu-item>
      <a-menu-item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item key="3">
        3rd menu item
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>
```
:::

### 多级菜单
传入的菜单里有多个层级。
:::demo
```html
<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click="e => e.preventDefault()">
      Cascading menu <a-icon type="down" />
    </a>
    <a-menu slot="overlay">
      <a-menu-item>1st menu item</a-menu-item>
      <a-menu-item>2nd menu item</a-menu-item>
      <a-sub-menu key="test" title="sub menu">
        <a-menu-item>3rd menu item</a-menu-item>
        <a-menu-item>4th menu item</a-menu-item>
      </a-sub-menu>
      <a-sub-menu title="disabled sub menu" disabled>
        <a-menu-item>5d menu item</a-menu-item>
        <a-menu-item>6th menu item</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-dropdown>
</template>
```
:::