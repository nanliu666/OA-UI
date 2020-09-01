## Popconfirm 气泡确认框

点击元素，弹出气泡确认框。
+ 注：此组件是对element的功能做了补充 -- 新增**不再提示**相关属性与事件

### 基础用法

Popconfirm 的属性与 Popover 很类似，因此对于重复属性，请参考 Popover 的文档，在此文档中不做详尽解释。
:::demo 在 Popconfirm 中，只有 `title` 属性可用，`content` 属性不会被展示。
```html
<template>
  <mg-popconfirm title="这是一段内容确定删除吗？">
    <el-button slot="reference">删除</el-button>
  </mg-popconfirm>
</template>

````
:::

### 自定义

可以在 Popconfirm 中自定义内容。
+ 此处有**不再提示**的选择的demo。选择后，需要用户自己做处理。
:::demo
```html
<template>
  <mg-popconfirm
    confirmButtonText='好的'
    cancelButtonText='不用了'
    icon="el-icon-info"
    iconColor="red"
    title="这是一段内容确定删除吗？"
    :isShowChecked='isShowChecked'
    @onTipsChecked="onTipsChecked"
  >
    <el-button slot="reference">删除</el-button>
  </mg-popconfirm>
</template>
<script>
  export default {
    data() {
      return {
        isShowChecked: true
      };
    },
    methods: {
      onTipsChecked() {
        console.log('tips-checked')
      }
    }
  };
</script>
```
:::

### Attributes
| 参数              | 说明                   | 类型    | 可选值 | 默认值           |
| ----------------- | ---------------------- | ------- | ------ | ---------------- |
| title             | 标题                   | String  | —      | —                |
| confirmButtonText | 确认按钮文字           | String  | —      | —                |
| cancelButtonText  | 取消按钮文字           | String  | —      | —                |
| confirmButtonType | 确认按钮类型           | String  | —      | Primary          |
| cancelButtonType  | 取消按钮类型           | String  | —      | Text             |
| icon              | Icon                   | String  | —      | el-icon-question |
| iconColor         | Icon 颜色              | String  | —      | #f90             |
| hideIcon          | 是否隐藏 Icon          | Boolean | —      | false            |
| isShowChecked     | 是否隐藏不再提示选择框 | Boolean | —      | false            |

### Slot
| 参数      | 说明                             |
| --------- | -------------------------------- |
| reference | 触发 Popconfirm 显示的 HTML 元素 |

### Events
| 事件名称     | 说明               | 回调参数 |
| ------------ | ------------------ | -------- |
| onConfirm    | 点击确认按钮时触发 | —        |
| onCancel     | 点击取消按钮时触发 | —        |
| onTipsChecked | 点击不再提示时触发 | —        |
