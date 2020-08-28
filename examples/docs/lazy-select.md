## LazySelect 懒加载选择器

当选项过多时,使用下拉菜单展示并选择内容,且且有懒加载功能,在处理长列表的时候,滚动到底部时触发加载行为

### 基础用法

适用广泛的基础单选
:::demo `v-model`的值为当前被选中的`el-option`的 value 属性值
```html
<template>
  <mg-lazy-select
    v-model="value"
    :load="loadUser"
    placeholder="请选择组织负责人"
    :option-props="{
      label:'label',
      value:'value',
      key:'key'
    }"
  />
</template>

<script>
let key = 0
export default {
  data() {
    return {
      value: null
    }
  },
  methods: {
    loadUser(){
      return Promise.resolve({
        data:[
            {label: `label${key}`, value: `value${key}`, key: `value${key++}`},
            {label: `label${key}`, value: `value${key}`, key: `value${key++}`},
            {label: `label${key}`, value: `value${key}`, key: `value${key++}`},
            {label: `label${key}`, value: `value${key}`, key: `value${key++}`},
            {label: `label${key}`, value: `value${key}`, key: `value${key++}`},
            {label: `label${key}`, value: `value${key}`, key: `value${key++}`},
            {label: `label${key}`, value: `value${key}`, key: `value${key++}`},
            {label: `label${key}`, value: `value${key}`, key: `value${key++}`},
            {label: `label${key}`, value: `value${key}`, key: `value${key++}`},
            {label: `label${key}`, value: `value${key}`, key: `value${key++}`}
          ]
      })
    }
  }
}
</script>
```
:::

### LazySelect Attributes
| 参数            | 说明            | 类型                      | 可选值 | 默认值 |
| --------------- | --------------- | ------------------------- | ------ | ------ |
| value / v-model | 绑定值          | boolean / string / number | —      | —      |
| first-option    | 第一个值        | object                    | —      | —      |
| option-list     | select的options | Array                     | —      | []     |

### LazySelect Events
| 事件名称 | 说明                 | 回调参数     |
| -------- | -------------------- | ------------ |
| change   | 选中值发生变化时触发 | 目前的选中值 |

### LazySelect Slots
| name  | 说明           |
| ----- | -------------- |
| empty | 无选项时的列表 |

### Methods
| 方法名 | 说明                            | 参数                                             |
| ------ | ------------------------------- | ------------------------------------------------ |
| focus  | 使 input 获取焦点               | -                                                |
| blur   | 使 input 失去焦点，并隐藏下拉框 | -                                                |
| load   | 加载函数,滚动到底部的时候调用   | {pageNo:number, pageSize:number, search: string} |
