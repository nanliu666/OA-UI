## Empty空状态
  
<!-- 详细文档见[Ant-Design-Vue Empty](https://antdv.com/components/empty-cn/) -->
### 何时使用
+ 当目前没有数据时，用于显式的用户提示。
+ 初始化场景时的引导创建流程。

### 基础用法
  
:::demo
```html
<template>
  <a-empty />
</template>
```
:::

### 自定义全局组件的空状态
:::demo
```html
<template>
  <div>
    <a-switch
      un-checked-children="default"
      checked-children="customize"
      :checked="customize"
      @change="val => (customize = val)"
    />

    <a-divider />
    <a-config-provider>
      <template v-if="customize" #renderEmpty>
        <div style="text-align: center">
          <a-icon type="smile" style="font-size: 20px" />
          <p>Data Not Found</p>
        </div>
      </template>
      <div class="config-provider">
        <h3>Select</h3>
        <a-select :style="style" :options="[]" />

        <h3>TreeSelect</h3>
        <a-tree-select :style="style" :tree-data="[]" />

        <h3>Cascader</h3>
        <a-cascader :style="style" :options="[]" :show-search="true" />

        <h3>Transfer</h3>
        <a-transfer :data-source="[]" />

        <h3>Table</h3>
        <a-table style="margin-top: 8px" :columns="columns" :data-source="[]" />
        <h3>List</h3>
        <a-list :data-source="[]" />
      </div>
    </a-config-provider>
  </div>
</template>
<script>
export default {
  data() {
    return {
      customize: false,
      style: { width: '200px' },
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
      ],
    };
  },
};
</script>
<style>
.code-box-demo .config-provider h3 {
  font-size: inherit;
  margin: 16px 0 8px 0;
}
</style>
```
:::

