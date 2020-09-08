## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。
```html
<template>
	<div class="button-demo-flex">
		<mg-button type="primary">主要按钮</mg-button>
		<mg-button plain>次要按钮</mg-button>
		<mg-button type="primary" icon="el-icon-edit">图标文字按钮</mg-button>
		<mg-button type="dashed" icon="el-icon-plus">虚线框按钮</mg-button>
  	</div>
  	<div class="button-demo-flex">
  		<mg-button type="text">文字按钮</mg-button>
  		<mg-button type="noBorder" icon="el-icon-edit">无边框按钮</mg-button>
  		<mg-button type="noBorder" icon="el-icon-s-tools" circle></mg-button>
  	</div>
</template>
```
:::

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。
```html
<template>
	<div class="button-demo-flex">
		<mg-button type="primary" disabled>主要按钮</mg-button>
		<mg-button plain disabled>次要按钮</mg-button>
		<mg-button type="primary" icon="el-icon-edit" disabled>图标文字按钮</mg-button>
		<mg-button type="dashed" icon="el-icon-plus" disabled>虚线框按钮</mg-button>
  	</div>
  	<div class="button-demo-flex">
  		<mg-button type="text" disabled>文字按钮</mg-button>
  		<mg-button type="noBorder" icon="el-icon-edit" disabled>无边框按钮</mg-button>
  		<mg-button type="noBorder" icon="el-icon-s-tools" circle disabled></mg-button>
  	</div>
</template>
```
:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。
```html
<template>
	<mg-button>默认按钮</mg-button>
	<mg-button size="medium">中等按钮</mg-button>
	<mg-button size="small">小型按钮</mg-button>
	<mg-button size="mini">超小按钮</mg-button>
</template>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text / noBorder|     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
