## Tooltip文字提示
  
<!-- 详细文档见[Ant-Design-Vue Tooltip](https://antdv.com/components/tooltip-cn/) -->
### 定义
简单的文字提示气泡框，主要用于鼠标hover时显示简单的提示信息
### 何时使用
+ 对用户任务操作进行轻量的引导与提示。
+ 对页面元素的简单文字说明或补充，无操作。
+ 列如：
  + 1）帮助用户了解图标的含义或目的；
  +  2）显示截断文本的完整内容。

### 基础用法
  
:::demo
```html
<template>
  <a-tooltip>
    <template slot="title">
      prompt text
    </template>
    Tooltip will show when mouse enter.
  </a-tooltip>
</template>
```
:::

### 自动调整位置
气泡框不可见时自动调整位置
:::demo
```html
<template>
  <div :style="wrapStyles">
    <a-tooltip placement="left" title="Prompt Text" :get-popup-container="getPopupContainer">
      <a-button>Adjust automatically / 自动调整</a-button>
    </a-tooltip>
    <br />
    <a-tooltip
      style="marginTop: 10px"
      placement="left"
      title="Prompt Text"
      :get-popup-container="getPopupContainer"
      :auto-adjust-overflow="false"
    >
      <a-button>Ingore / 不处理</a-button>
    </a-tooltip>
  </div>
</template>
<script>
const wrapStyles = {
  overflow: 'hidden',
  position: 'relative',
  padding: '24px',
  border: '1px solid #e9e9e9',
};
export default {
  data() {
    return {
      wrapStyles,
    };
  },
  methods: {
    getPopupContainer(trigger) {
      return trigger.parentElement;
    },
  },
};
</script>
```
:::

