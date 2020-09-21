## Switch开关
开关选择器。 
<!-- 详细文档见[Ant-Design-Vue Switch](https://antdv.com/components/switch-cn/) -->
### 何时使用
* 需要表示开关状态/两种状态之间的切换时；
* 和 checkbox的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

### 基础用法
  
:::demo
```html
<template>
  <div>
    <a-switch default-checked @change="onChange" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
  },
};
</script>

```
:::

# 带图标
:::demo
```html
<template>
  <div>
    <a-switch checked-children="开" un-checked-children="关" default-checked />
    <br />
    <a-switch checked-children="1" un-checked-children="0" />
    <br />
    <a-switch default-checked>
      <a-icon slot="checkedChildren" type="check" />
      <a-icon slot="unCheckedChildren" type="close" />
    </a-switch>
  </div>
</template>

```
:::