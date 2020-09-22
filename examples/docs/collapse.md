## Collapse折叠面板
  
<!-- 详细文档见[Ant-Design-Vue Collapse](https://antdv.com/components/collapse-cn/) -->
### 定义
对一组有规律的信息进行分组和收纳，帮助用户有条理地阅读内容。
### 何时使用
+ 数据内容较多，阅读理解难度大，可将主题进行概括并分组展示
+ 数据内容有一定的逻辑结构，需要提高空间利用率

### 基础用法
  可以同时展开多个面板，这个例子默认展开了第一个。
:::demo
```html
<template>
  <div>
    <a-collapse v-model="activeKey">
      <a-collapse-panel key="1" header="This is panel header 1">
        <p>{{ text }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
        <p>{{ text }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="This is panel header 3" disabled>
        <p>{{ text }}</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      activeKey: ['1'],
    };
  },
  watch: {
    activeKey(key) {
      console.log(key);
    },
  },
};
</script>
```
:::

### 手风琴
手风琴，每次只打开一个 tab。
:::demo
```html
<template>
  <div>
    <a-collapse accordion>
      <a-collapse-panel key="1" header="This is panel header 1">
        <p>{{ text }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
        <p>{{ text }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="This is panel header 3">
        <p>{{ text }}</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
    };
  },
};
</script>

```
:::


