## Transfer穿梭框
双栏穿梭选择框。  
<!-- 详细文档见[Ant-Design-Vue Transfer](https://antdv.com/components/transfer-cn/) -->
### 何时使用
* 要在多个可选项中进行多选时。
* 比起 Select 和 TreeSelect，穿梭框占据更大的空间，可以展示可选项的更多信息。

### 基础用法
  
:::demo
```html
<template>
  <div>
    <a-transfer
      :data-source="mockData"
      :titles="['Source', 'Target']"
      :target-keys="targetKeys"
      :selected-keys="selectedKeys"
      :render="item => item.title"
      :disabled="disabled"
      @change="handleChange"
      @selectChange="handleSelectChange"
      @scroll="handleScroll"
    />
    <a-switch
      un-checked-children="enabled"
      checked-children="disabled"
      :checked="disabled"
      style="margin-top: 16px"
      @change="handleDisable"
    />
  </div>
</template>
<script>
export default {
  data() {
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 3 < 1,
      });
    }

    const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);
    return {
      mockData,
      targetKeys: oriTargetKeys,
      selectedKeys: ['1', '4'],
      disabled: false,
    };
  },
  methods: {
    handleChange(nextTargetKeys, direction, moveKeys) {
      this.targetKeys = nextTargetKeys;

      console.log('targetKeys: ', nextTargetKeys);
      console.log('direction: ', direction);
      console.log('moveKeys: ', moveKeys);
    },
    handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys];

      console.log('sourceSelectedKeys: ', sourceSelectedKeys);
      console.log('targetSelectedKeys: ', targetSelectedKeys);
    },
    handleScroll(direction, e) {
      console.log('direction:', direction);
      console.log('target:', e.target);
    },
    handleDisable(disabled) {
      this.disabled = disabled;
    },
  },
};
</script>

```
:::
### 高级用法
:::demo
```html
<template>
  <a-transfer
    :data-source="mockData"
    show-search
    :list-style="{
      width: '250px',
      height: '300px',
    }"
    :operations="['to right', 'to left']"
    :target-keys="targetKeys"
    :render="item => `${item.title}-${item.description}`"
    @change="handleChange"
  >
    <a-button
      slot="footer"
      slot-scope="props"
      size="small"
      style="float:right;margin: 5px"
      @click="getMock"
    >
      reload
    </a-button>
    <span slot="notFoundContent">
      没数据
    </span>
  </a-transfer>
</template>
<script>
export default {
  data() {
    return {
      mockData: [],
      targetKeys: [],
    };
  },
  mounted() {
    this.getMock();
  },
  methods: {
    getMock() {
      const targetKeys = [];
      const mockData = [];
      for (let i = 0; i < 20; i++) {
        const data = {
          key: i.toString(),
          title: `content${i + 1}`,
          description: `description of content${i + 1}`,
          chosen: Math.random() * 2 > 1,
        };
        if (data.chosen) {
          targetKeys.push(data.key);
        }
        mockData.push(data);
      }
      this.mockData = mockData;
      this.targetKeys = targetKeys;
    },
    handleChange(targetKeys, direction, moveKeys) {
      console.log(targetKeys, direction, moveKeys);
      this.targetKeys = targetKeys;
    },
  },
};
</script>

```
:::

### 表格穿梭框
使用 Table 组件作为自定义渲染列表。
:::demo
```html
<template>
  <div>
    <a-transfer
      :data-source="mockData"
      :target-keys="targetKeys"
      :disabled="disabled"
      :show-search="showSearch"
      :filter-option="(inputValue, item) => item.title.indexOf(inputValue) !== -1"
      :show-select-all="false"
      @change="onChange"
    >
      <template
        slot="children"
        slot-scope="{
          props: { direction, filteredItems, selectedKeys, disabled: listDisabled },
          on: { itemSelectAll, itemSelect },
        }"
      >
        <a-table
          :row-selection="
            getRowSelection({ disabled: listDisabled, selectedKeys, itemSelectAll, itemSelect })
          "
          :columns="direction === 'left' ? leftColumns : rightColumns"
          :data-source="filteredItems"
          size="small"
          :style="{ pointerEvents: listDisabled ? 'none' : null }"
          :custom-row="
            ({ key, disabled: itemDisabled }) => ({
              on: {
                click: () => {
                  if (itemDisabled || listDisabled) return;
                  itemSelect(key, !selectedKeys.includes(key));
                },
              },
            })
          "
        />
      </template>
    </a-transfer>
    <a-switch
      un-checked-children="disabled"
      checked-children="disabled"
      :checked="disabled"
      style="margin-top: 16px"
      @change="triggerDisable"
    />
    <a-switch
      un-checked-children="showSearch"
      checked-children="showSearch"
      :checked="showSearch"
      style="margin-top: 16px"
      @change="triggerShowSearch"
    />
  </div>
</template>
<script>
const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 4 === 0,
  });
}

const originTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

const leftTableColumns = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
  {
    dataIndex: 'description',
    title: 'Description',
  },
];
const rightTableColumns = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
];

export default {
  data() {
    return {
      mockData,
      targetKeys: originTargetKeys,
      disabled: false,
      showSearch: false,
      leftColumns: leftTableColumns,
      rightColumns: rightTableColumns,
    };
  },
  methods: {
    onChange(nextTargetKeys) {
      this.targetKeys = nextTargetKeys;
    },

    triggerDisable(disabled) {
      this.disabled = disabled;
    },

    triggerShowSearch(showSearch) {
      this.showSearch = showSearch;
    },
    getRowSelection({ disabled, selectedKeys, itemSelectAll, itemSelect }) {
      return {
        getCheckboxProps: item => ({ props: { disabled: disabled || item.disabled } }),
        onSelectAll(selected, selectedRows) {
          const treeSelectedKeys = selectedRows
            .filter(item => !item.disabled)
            .map(({ key }) => key);
            const difference = (a, b) => {
              const s = new Set(b);
              return a.filter(x => !s.has(x));
            };
          const diffKeys = selected
            ? difference(treeSelectedKeys, selectedKeys)
            : difference(selectedKeys, treeSelectedKeys);
          itemSelectAll(diffKeys, selected);
        },
        onSelect({ key }, selected) {
          itemSelect(key, selected);
        },
        selectedRowKeys: selectedKeys,
      };
    },
  },
};
</script>
```
:::

### 树穿梭框
:::demo
```html
<template>
  <div>
    <a-transfer
      class="tree-transfer"
      :data-source="dataSource"
      :target-keys="targetKeys"
      :render="item => item.title"
      :show-select-all="false"
      @change="onChange"
    >
      <template
        slot="children"
        slot-scope="{
          props: { direction, selectedKeys },
          on: { itemSelect },
        }"
      >
        <a-tree
          v-if="direction === 'left'"
          blockNode
          checkable
          checkStrictly
          defaultExpandAll
          :checkedKeys="[...selectedKeys, ...targetKeys]"
          :treeData="treeData"
          @check="(_, props) => {onChecked(_, props, [...selectedKeys, ...targetKeys],itemSelect)}"
          @select="(_, props) => {onChecked(_, props, [...selectedKeys, ...targetKeys],itemSelect)}"
        />
      </template>
    </a-transfer>
  </div>
</template>
<script>
const treeData = [
  { key: '0-0', title: '0-0' },
  {
    key: '0-1',
    title: '0-1',
    children: [{ key: '0-1-0', title: '0-1-0' }, { key: '0-1-1', title: '0-1-1' }],
  },
  { key: '0-2', title: '0-3' },
];

const transferDataSource = [];
function flatten(list = []) {
  list.forEach(item => {
    transferDataSource.push(item);
    flatten(item.children);
  });
}
flatten(JSON.parse(JSON.stringify(treeData)))

function isChecked(selectedKeys, eventKey) {
  return selectedKeys.indexOf(eventKey) !== -1;
}

function handleTreeData(data, targetKeys = []) {
  data.forEach(item => {
    item['disabled'] = targetKeys.includes(item.key)
    if(item.children) {
      handleTreeData(item.children, targetKeys)
    }
  })
  return data
}

export default {
  data() {
    return {
      targetKeys: [],
      dataSource: transferDataSource
    };
  },
  computed: {
    treeData() {
      return handleTreeData(treeData, this.targetKeys)
    }
  },
  methods: {
    onChange(targetKeys) {
      console.log('Target Keys:', targetKeys);
      this.targetKeys = targetKeys;
    },
    onChecked(_, e, checkedKeys, itemSelect){
      const { eventKey } = e.node
      itemSelect(eventKey, !isChecked(checkedKeys, eventKey));
    }
  },
};
</script>
<style scoped>
.tree-transfer .ant-transfer-list:first-child {
  width: 50%;
  flex: none;
}
</style>
```
:::