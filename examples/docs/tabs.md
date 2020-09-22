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
