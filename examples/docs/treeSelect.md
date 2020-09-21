## TreeSelect树型选择控件
  
<!-- 详细文档见[Ant-Design-Vue TreeSelect](https://antdv.com/components/treeSelect-cn/) -->
### 何时使用
类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。


### 基础用法
  
:::demo
```html
<template>
  <a-tree-select
    v-model="value"
    show-search
    style="width: 100%"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    placeholder="Please select"
    allow-clear
    tree-default-expand-all
  >
    <a-tree-select-node key="0-1" value="parent 1" title="parent 1">
      <a-tree-select-node key="0-1-1" value="parent 1-0" title="parent 1-0">
        <a-tree-select-node key="random" value="leaf1" title="my leaf" />
        <a-tree-select-node key="random1" value="leaf2" title="your leaf" />
      </a-tree-select-node>
      <a-tree-select-node key="random2" value="parent 1-1" title="parent 1-1">
        <a-tree-select-node key="random3" value="sss">
          <!-- <b slot="title" style="color: #08c">sss</b> -->
        </a-tree-select-node>
      </a-tree-select-node>
    </a-tree-select-node>
  </a-tree-select>
</template>

<script>
export default {
  data() {
    return {
      treeExpandedKeys: [],
      value: undefined,
    };
  },
};
</script>

```
:::

### 可勾选
:::demo
```html
<template>
  <a-tree-select
    v-model="value"
    style="width: 100%"
    :tree-data="treeData"
    tree-checkable
    search-placeholder="Please select"
  />
</template>

<script>

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
        disabled: true,
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];
export default {
  data() {
    return {
      value: ['0-0-0'],
      treeData,
    };
  },
};
</script>

```
:::

### 多选
:::demo
```html
<template>
  <a-tree-select
    show-search
    style="width: 100%"
    :value="value"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    placeholder="Please select"
    allow-clear
    multiple
    tree-default-expand-all
    @change="onChange"
    @search="onSearch"
    @select="onSelect"
  >
    <a-tree-select-node key="0-1" value="parent 1" title="parent 1">
      <a-tree-select-node key="0-1-1" value="parent 1-0" title="parent 1-0">
        <a-tree-select-node key="random" value="leaf1" title="my leaf" />
        <a-tree-select-node key="random1" value="leaf2" title="your leaf" />
      </a-tree-select-node>
      <a-tree-select-node key="random2" value="parent 1-1" title="parent 1-1">
        <a-tree-select-node key="random3" value="sss">
          <b slot="title" style="color: #08c">sss</b>
        </a-tree-select-node>
      </a-tree-select-node>
    </a-tree-select-node>
  </a-tree-select>
</template>

<script>
export default {
  data() {
    return {
      value: undefined,
    };
  },
  methods: {
    onChange(value) {
      console.log(value);
      this.value = value;
    },
    onSearch() {
      console.log(...arguments);
    },
    onSelect() {
      console.log(...arguments);
    },
  },
};
</script>

```
:::