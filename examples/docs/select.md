## Select选择器
下拉选择器。  
<!-- 详细文档见[Ant-Design-Vue Select](https://antdv.com/components/select-cn/) -->
### 何时使用
* 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
* 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

### 基础用法
  
:::demo
```html
<template>
  <div>
    <a-select default-value="lucy" style="width: 120px" @change="handleChange">
      <a-select-option value="jack">
        Jack
      </a-select-option>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
      <a-select-option value="disabled" disabled>
        Disabled
      </a-select-option>
      <a-select-option value="Yiminghe">
        yiminghe
      </a-select-option>
    </a-select>
    <a-select default-value="lucy" style="width: 120px" disabled>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
    </a-select>
    <a-select default-value="lucy" style="width: 120px" loading>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
    </a-select>
  </div>
</template>
<script>
export default {
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>

```
:::

### 三种尺寸
:::demo
```html
<template>
  <div>
    <a-radio-group v-model="size">
      <a-radio-button value="large">
        Large
      </a-radio-button>
      <a-radio-button value="default">
        Default
      </a-radio-button>
      <a-radio-button value="small">
        Small
      </a-radio-button>
    </a-radio-group>
    <br /><br />
    <a-select :size="size" default-value="a1" style="width: 200px" @change="handleChange">
      <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{ (i + 9).toString(36) + i }}
      </a-select-option>
    </a-select>
    <br />
    <a-select
      mode="multiple"
      :size="size"
      placeholder="Please select"
      :default-value="['a1', 'b2']"
      style="width: 200px"
      @change="handleChange"
      @popupScroll="popupScroll"
    >
      <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{ (i + 9).toString(36) + i }}
      </a-select-option>
    </a-select>
    <br />
    <a-select
      mode="tags"
      :size="size"
      placeholder="Please select"
      :default-value="['a1', 'b2']"
      style="width: 200px"
      @change="handleChange"
    >
      <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{ (i + 9).toString(36) + i }}
      </a-select-option>
    </a-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      size: 'default',
    };
  },
  methods: {
    handleChange(value) {
      console.log(`Selected: ${value}`);
    },
    popupScroll() {
      console.log('popupScroll');
    },
  },
};
</script>

```
:::