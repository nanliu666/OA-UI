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

### 支持清空
:::demo
```html
<template>
  <div>
    <a-select :allow-clear="true" default-value="lucy" style="width: 120px" @change="handleChange">
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

### 多选和滚动条
多选，从已有条目中选择（scroll the menu）
:::demo
```html
<template>
  <a-select
    mode="multiple"
    :default-value="['a1', 'b2']"
    style="width: 100%"
    placeholder="Please select"
    @change="handleChange"
  >
    <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
      {{ (i + 9).toString(36) + i }}
    </a-select-option>
  </a-select>
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

### 支持分组
用 OptGroup 进行选项分组。
:::demo
```html
<template>
  <a-select default-value="lucy" style="width: 200px" @change="handleChange">
    <a-select-opt-group>
      <span slot="label"><a-icon type="user" />Manager</span>
      <a-select-option value="jack">
        Jack
      </a-select-option>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
    </a-select-opt-group>
    <a-select-opt-group label="Engineer">
      <a-select-option value="Yiminghe">
        yiminghe
      </a-select-option>
    </a-select-opt-group>
  </a-select>
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

### 配置新增操作
:::demo
```html
<template>
  <a-select default-value="lucy" style="width: 120px">
    <div slot="dropdownRender" slot-scope="menu">
      <v-nodes :vnodes="menu" />
      <a-divider style="margin: 4px 0;" />
      <div
        style="padding: 4px 8px; cursor: pointer;"
        @mousedown="e => e.preventDefault()"
        @click="addItem"
      >
        <a-icon type="plus" /> Add item
      </div>
    </div>
    <a-select-option v-for="item in items" :key="item" :value="item">
      {{ item }}
    </a-select-option>
  </a-select>
</template>
<script>
let index = 0;
export default {
  components: {
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes,
    },
  },
  data: () => ({ items: ['jack', 'lucy'] }),
  methods: {
    addItem() {
      console.log('addItem');
      this.items.push(`New item ${index++}`);
    },
  },
};
</script>
```
:::

### 多种对应的列表样式
options内部自定义内容，以下举一个例子图形+选型标题+内容
:::demo
```html
<template>
  <a-select
    v-model="value"
    mode="multiple"
    style="width: 100%"
    placeholder="select one country"
    option-label-prop="label"
  >
    <a-select-option value="china" label="China">
      <div>标题</div>
      <span role="img" aria-label="China">
        🇨🇳
      </span>
      <img role="img" src="https://oa-file-dev.bestgrand.com.cn/de0654def8414587835533583e60959c.png"/>
      China (中国)
    </a-select-option>
    <a-select-option value="usa" label="USA">
      <div>标题</div>
      <span role="img" aria-label="USA">
        🇺🇸
      </span>
      USA (美国)
    </a-select-option>
    <a-select-option value="japan" label="Japan">
      <div>标题</div>
      <span role="img" aria-label="Japan">
        🇯🇵
      </span>
      Japan (日本)
    </a-select-option>
    <a-select-option value="korea" label="Korea">
      <div>标题</div>
      <span role="img" aria-label="Korea">
        🇰🇷
      </span>
      Korea (韩国)
    </a-select-option>
  </a-select>
</template>
<script>
export default {
  data() {
    return {
      value: ['china'],
    };
  },
  watch: {
    value(val) {
      console.log(`selected:`, val);
    },
  },
};
</script>
```
:::