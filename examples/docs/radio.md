## Radio单选框
单选框。  
<!-- 详细文档见[Ant-Design-Vue Radio](https://antdv.com/components/radio-cn/) -->
### 何时使用
* 用于在多个备选项中选中单个状态。
* 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

### 基础用法
  
:::demo
```html
<template>
  <a-radio>Radio</a-radio>
</template>

```
:::
### RadioGroup 垂直
:::demo
```html
<template>
  <a-radio-group v-model="value" @change="onChange">
    <a-radio :style="radioStyle" :value="1">
      Option A
    </a-radio>
    <a-radio :style="radioStyle" :value="2">
      Option B
    </a-radio>
    <a-radio :style="radioStyle" :value="3">
      Option C
    </a-radio>
    <a-radio :style="radioStyle" :value="4">
      More...
      <a-input v-if="value === 4" :style="{ width: 100, marginLeft: 10 }" />
    </a-radio>
  </a-radio-group>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      },
    };
  },
  methods: {
    onChange(e) {
      console.log('radio checked', e.target.value);
    },
  },
};
</script>

```
:::