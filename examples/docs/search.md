## Search 搜索

基于Element-UI Select组件，支持Select组件的所有属性

### 基础用法

:::demo
```html
<mg-search
  ref="search"
  v-model="value"
  :options="options"
/>

<script>
export default {
  data(){
    return {
      value: null,
      options: [
        {
          label: '搜索建议',
          options: [
            {
              label: 'label',
              value: 'label',
              disabled: true
            },
            'some'
          ]
        }
      ]
    }
  }
}
</script>
```
:::

### 含搜索按钮的搜索框

:::demo
```html
<mg-search
  ref="search"
  :options="options"
  searchBtn
  v-model="value"
  @search="handleSearch"
/>

<script>
export default {
  data(){
    return {
      value: null,
      options: [
        {
          label: '搜索建议',
          options: [
            {
              label: 'label',
              value: 'label',
              disabled: true
            },
            'some'
          ]
        }
      ]
    }
  },
  methods: {
    handleSearch(search) {
      console.log(search)
    }
  }
}
</script>
```
:::



### Search Attributes
| 参数                  | 说明                                                                                          | 类型                      | 可选值            | 默认值         |
| --------------------- | --------------------------------------------------------------------------------------------- | ------------------------- | ----------------- | -------------- |
| value / v-model       | 绑定值                                                                                        | boolean / string / number | —                 | —              |
| disabled              | 是否禁用                                                                                      | boolean                   | —                 | false          |
| value-key             | 作为 value 唯一标识的键名，绑定值为对象类型时必填                                             | string                    | —                 | value          |
| size                  | 输入框尺寸                                                                                    | string                    | medium/small/mini | —              |
| clearable             | 是否可以清空选项                                                                              | boolean                   | —                 | true           |
| collapse-tags         | 多选时是否将选中值按文字的形式展示                                                            | boolean                   | —                 | false          |
| placeholder           | 占位符                                                                                        | string                    | —                 | 请输入搜索内容 |
| filterable            | 是否可搜索                                                                                    | boolean                   | —                 | false          |
| allow-create          | 是否允许用户创建新条目，需配合 `filterable` 使用                                              | boolean                   | —                 | true           |
| filter-method         | 自定义搜索方法                                                                                | function                  | —                 | —              |
| remote                | 是否为远程搜索                                                                                | boolean                   | —                 | false          |
| remote-method         | 远程搜索方法                                                                                  | function                  | —                 | —              |
| loading               | 是否正在从远程获取数据                                                                        | boolean                   | —                 | false          |
| loading-text          | 远程加载时显示的文字                                                                          | string                    | —                 | 加载中         |
| no-match-text         | 搜索条件无匹配时显示的文字，也可以使用`slot="empty"`设置                                      | string                    | —                 | 无匹配数据     |
| no-data-text          | 选项为空时显示的文字，也可以使用`slot="empty"`设置                                            | string                    | —                 | 无数据         |
| popper-class          | Search 下拉框的类名                                                                           | string                    | —                 | —              |
| reserve-keyword       | 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词                                      | boolean                   | —                 | false          |
| default-first-option  | 在输入框按下回车，选择第一个匹配项。需配合 `filterable` 或 `remote` 使用                      | boolean                   | -                 | true           |
| popper-append-to-body | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false                | boolean                   | -                 | true           |
| automatic-dropdown    | 对于不可搜索的 Search，是否在输入框获得焦点后自动弹出选项菜单                                 | boolean                   | -                 | false          |
| append                | 将options添加到历史记录之后，只有当history为true的时候生效                                    | boolean                   | -                 | false          |
| history               | 是否记录历史记录                                                                              | boolean                   | -                 | true           |
| options               | 自定义搜索列表(可以是select组件的option数组,也可以是option-group数组)也可以是option-group对象 | array/object/boolean      | -                 | false          |
| searchBtn             | 是否显示搜索按钮                                                                              | boolean                   | -                 | false          |
| searchBtnText         | 搜索按钮的文本                                                                                | stirng                    | -                 | 搜索           |

### Search events
| 事件名称       | 说明                                     | 回调参数                      |
| -------------- | ---------------------------------------- | ----------------------------- |
| change         | 选中值发生变化时触发                     | 目前的选中值                  |
| visible-change | 下拉框出现/隐藏时触发                    | 出现则为 true，隐藏则为 false |
| remove-tag     | 多选模式下移除tag时触发                  | 移除的tag值                   |
| clear          | 可清空的单选模式下用户点击清空按钮时触发 | —                             |
| blur           | 当 input 失去焦点时触发                  | (event: event)                |
| focus          | 当 input 获得焦点时触发                  | (event: event)                |
| search         | 搜索事件                                 | 当前搜索的关键词              |

### Search Slots
| name   | 说明                |
| ------ | ------------------- |
| prefix | Select 组件头部内容 |
| empty  | 无选项时的列表      |