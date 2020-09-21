## Tag标签
  
<!-- 详细文档见[Ant-Design-Vue Tag](https://antdv.com/components/tag-cn/) -->
### 定义
标签是结构化展示精简信息的一种方式，常用于标记或分类
### 何时使用
当需要标记事物的属性、维度、状态等
### 基础用法
  基本标签的用法，可以通过添加 closable 变为可关闭标签。可关闭标签具有 close 两个事件
:::demo
```html
<template>
  <div>
    <a-tag>Tag 1</a-tag>
    <a-tag><a href="https://github.com/vueComponent/ant-design">Link</a></a-tag>
    <a-tag closable @close="log">
      Tag 2
    </a-tag>
    <a-tag closable @close="preventDefault">
      Prevent Default
    </a-tag>
  </div>
</template>
<script>
export default {
  methods: {
    log(e) {
      console.log(e);
    },
    preventDefault(e) {
      e.preventDefault();
      console.log('Clicked! But prevent default.');
    },
  },
};
</script>
```
:::

### 多彩标签
我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。
:::demo
```html
<template>
  <div>
    <h4 style="margin-bottom: 16px">
      Presets:
    </h4>
    <div>
      <a-tag color="pink">
        pink
      </a-tag>
      <a-tag color="red">
        red
      </a-tag>
      <a-tag color="orange">
        orange
      </a-tag>
      <a-tag color="green">
        green
      </a-tag>
      <a-tag color="cyan">
        cyan
      </a-tag>
      <a-tag color="blue">
        blue
      </a-tag>
      <a-tag color="purple">
        purple
      </a-tag>
    </div>
    <h4 style="margin: '16px 0'">
      Custom:
    </h4>
    <div>
      <a-tag color="#f50">
        #f50
      </a-tag>
      <a-tag color="#2db7f5">
        #2db7f5
      </a-tag>
      <a-tag color="#87d068">
        #87d068
      </a-tag>
      <a-tag color="#108ee9">
        #108ee9
      </a-tag>
    </div>
  </div>
</template>
```
:::

