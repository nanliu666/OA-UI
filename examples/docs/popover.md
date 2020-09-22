## Popover气泡卡片
  
<!-- 详细文档见[Ant-Design-Vue Popover](https://antdv.com/components/popover-cn/) -->
### 定义
轻量的信息展示方式，通常由用户主动唤起，不打断用户浏览的心流和路径
### 何时使用
+ 当目标元素有进一步的描述和相关操作时，可以收纳到卡片中
+ 不希望打断用户正在进行的工作流程，可使用气泡卡片
+ 作为未展示完整的文字、操作的名称或短文本信息，建议用 【Tooltip】

### 基础用法
  
:::demo
```html
<template>
  <a-popover title="Title">
    <template slot="content">
      <p>Content</p>
      <p>Content</p>
    </template>
    <a-button type="primary">
      Hover me
    </a-button>
  </a-popover>
</template>
```
:::

### 箭头指向
设置了 arrowPointAtCenter 后，箭头将指向目标元素的中心。
:::demo
```html
<template>
  <div>
    <a-popover placement="topLeft">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <span slot="title">Title</span>
      <a-button>Align edge / 边缘对齐</a-button>
    </a-popover>
    <a-popover placement="topLeft" arrow-point-at-center>
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <span slot="title">Title</span>
      <a-button>Arrow points to center / 箭头指向中心</a-button>
    </a-popover>
  </div>
</template>
```
:::
