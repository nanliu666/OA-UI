## Search搜索
<!-- 详细文档见[Ant-Design-Vue Search](https://antdv.com/components/autocomplete-cn/) -->
  
### 何时使用
页面、表单搜索数据时使用。

### 通用规则
- 当搜索为高频操作功能或鼓励用户使用该功能的场景下，搜索入口需使用完整搜索框。
- 当搜索在模块内，或为非高频操作的场景下，搜索入口可仅使用「搜索图标」。
- 精确搜索：用户明确搜索内容，对搜索结果有一定的心理预期时，例如ID、编号等，建议采用精确搜索。
- 模糊搜索：用户操作无目的或目的不明确，对更多目标内容没有预期，或者不了解搜索功能索涵盖的范围时，建议采用模糊搜索。
- 当用户退出搜索时，通常直接清空搜索关键词，不做保留。
- 业务中通常还可与“搜索推荐、历史搜索”等搭配使用。


### 基础用法
  
:::demo
```html
<template>
  <mg-search width="500px" :dataSource="dataSource" @submit="handleSubmit" />
  <mg-search :defaultValue="defaultValue" :dataSource="dataSource" enterButton />
  <mg-search :dataSource="dataSource" allowClear />
</template>

<script>
export default {
  data() {
    return {
      defaultValue: "settings",
      dataSource: [
        { title: "推荐搜索", children: ["推荐搜索1","推荐搜索2"] }
      ]
    }
  },

  methods: {
    handleSubmit(value) {
      console.log(value)
    }
  }
}
</script>

<style>
.mg-search {
  width: 500px;
  border: 1px solid black;
}
</style>
```
:::

:::demo 消除历史记录
```html
<mg-search history-clearable/>
```
:::

### 属性
| 参数             | 说明                                                        | 类型            | 可选值 | 默认值   |
| ---------------- | ----------------------------------------------------------- | --------------- | ------ | -------- |
| allowClear       | 是否可以清除(设置宽度,否则出现清除按钮的时候宽度会发生改变) | boolean         | —      | `false`  |
| dataSource       | 数据源列表                                                  | Array\|object   | —      | `[]`     |
| defaultValue     | 初始值                                                      | string          | —      | `""`     |
| history          | 是否记录历史记录                                            | boolean\|object | —      | `true`   |
| historyClearable | 是否可以消除历史记录                                        | boolean         | —      | `false`  |
| width            | 输入框的宽度                                                | string          | —      | `"auto"` |

### 事件 
| name   | 说明                    | 参数              |
| ------ | ----------------------- | ----------------- |
| submit | 触发搜索事件            | `keywords:string` |
| input  | 用于v-model进行数据同步 | `input:string`    |

:::tip
支持 ant-design-vue autoComplete组件所有的属性与插槽,上列表为mg-search组件的扩展,相同属性与插槽略
:::