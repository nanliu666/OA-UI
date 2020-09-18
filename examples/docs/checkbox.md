## Checkbox多选框
多选框。详细文档见[Ant-Design-Vue Checkbox](https://antdv.com/components/checkbox-cn/)
  
### 何时使用
* 在一组可选项中进行多项选择时；
* 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

### 基础用法
  
:::demo
```html
<template>
  <a-checkbox @change="onChange">
    Checkbox
  </a-checkbox>
</template>
<script>
export default {
  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
  },
};
</script>

```
:::
### 多选框组
:::demo
```html
 <template>
  <div>
    <a-checkbox-group
      v-model="value"
      name="checkboxgroup"
      :options="plainOptions"
      @change="onChange"
    />
    <br />
    <a-checkbox-group :options="plainOptions" :default-value="['Apple']" @change="onChange" />
    <br />
    <a-checkbox-group :options="options" :value="['Pear']" @change="onChange" />
    <br />
    <a-checkbox-group
      :options="optionsWithDisabled"
      disabled
      :default-value="['Apple']"
      @change="onChange"
    >
      <span slot="label" slot-scope="{ value }" style="color: red">{{ value }}</span>
    </a-checkbox-group>
  </div>
</template>
<script>
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];
export default {
  data() {
    return {
      plainOptions,
      options,
      optionsWithDisabled,
      value: [],
    };
  },
  methods: {
    onChange(checkedValues) {
      console.log('checked = ', checkedValues);
      console.log('value = ', this.value);
    },
  },
};
</script>

 ```
 :::
