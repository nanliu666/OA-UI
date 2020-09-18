## InputNumber数字输入框
通过鼠标或键盘，输入范围内的数值。详细文档见[Ant-Design-Vue InputNumber](https://antdv.com/components/input-number-cn/)
  
### 何时使用
当需要获取标准数值时。

### 基础用法
  
:::demo
```html
<template>
  <div>
    <a-input-number id="inputNumber" v-model="value" :min="1" :max="10" @change="onChange" />
    当前值：{{ value }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 3,
    };
  },
  methods: {
    onChange(value) {
      console.log('changed', value);
    },
  },
};
</script>

```
:::

### 格式化展示

:::demo
```html
<template>
  <div>
    <a-input-number
      :default-value="1000"
      :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
      :parser="value => value.replace(/\$\s?|(,*)/g, '')"
      @change="onChange"
    />
    <a-input-number
      :default-value="100"
      :min="0"
      :max="100"
      :formatter="value => `${value}%`"
      :parser="value => value.replace('%', '')"
      @change="onChange"
    />
  </div>
</template>
<script>
export default {
  methods: {
    onChange(value) {
      console.log('changed', value);
    },
  },
};
</script>

```
:::
