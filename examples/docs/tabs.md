## Tabs标签页
  
<!-- 详细文档见[Ant-Design-Vue Tabs](https://antdv.com/components/tabs-cn/) -->
### 定义
在同一个模块内快速切换多个内容
### 何时使用
+ 当需要以一种轻量的方式来组织多个平级但又分别独立的内容时
+ 常用于页面内某个模块中，用于页面级导航

### 基础用法
  
:::demo
```html
<template>
  <div>
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="Tab 1">
        Content of Tab Pane 1
      </a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" force-render>
        Content of Tab Pane 2
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">
        Content of Tab Pane 3
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>
```
:::
### 禁用
  
:::demo
```html
<template>
  <a-tabs default-active-key="1">
    <a-tab-pane key="1" tab="Tab 1">
      Tab 1
    </a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2" disabled>
      Tab 2
    </a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3">
      Tab 3
    </a-tab-pane>
  </a-tabs>
</template>
```
:::

### 标签页收纳（滑动形式）
可以左右、上下滑动，容纳更多标签。
:::demo
```html
<template>
  <div style="width: 500px">
    <a-radio-group v-model="mode" :style="{ marginBottom: '8px' }">
      <a-radio-button value="top">
        Horizontal
      </a-radio-button>
      <a-radio-button value="left">
        Vertical
      </a-radio-button>
    </a-radio-group>
    <a-tabs
      default-active-key="1"
      :tab-position="mode"
      :style="{ height: '200px' }"
      @prevClick="callback"
      @nextClick="callback"
    >
      <a-tab-pane v-for="i in 30" :key="i" :tab="`Tab-${i}`"> Content of tab {{ i }} </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mode: 'top',
    };
  },
  methods: {
    callback(val) {
      console.log(val);
    },
  },
};
</script>
```
:::