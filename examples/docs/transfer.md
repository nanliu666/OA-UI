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