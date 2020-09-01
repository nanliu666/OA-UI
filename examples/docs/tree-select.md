## TreeSelect 树形选择器

当选项过多时,使用下拉菜单展示并选择内容,且且有懒加载功能,在处理长列表的时候,滚动到底部时触发加载行为

### 基础用法

适用广泛的基础单选
:::demo `v-model`的值为当前被选中的`el-option`的 value 属性值
```html
<template>
  <mg-tree-select
    v-model="value"
    multiple
    collapseTags
    :data="data"
    :props="{label: 'orgName',children: 'children',value: 'orgId' }"
  >
  </mg-tree-select>
</template>

<script>
const MOCK_DATA = {
  "resCode": 200,
  "success": true,
  "response": [
    {
      "orgId": "1252523599903072257",
      "orgName": "百利宏",
      "orgType": "Enterprise",
      "sort": 1,
      "parentId": 0,
      "children": [
        {
          "orgId": "1252523599903072258",
          "orgName": "集团总部",
          "orgType": "Department",
          "sort": 3,
          "parentId": 1252523599903072257,
          "id": 1252523599903072258,
          "hasChildren": false
        },
        {
          "orgId": "1262947492677632002",
          "orgName": "易宝软件",
          "orgType": "Company",
          "sort": 1,
          "parentId": 1252523599903072257,
          "children": [
            {
              "orgId": "1252523599903072259",
              "orgName": "易宝广州分公司",
              "orgType": "Company",
              "sort": 2,
              "parentId": 1262947492677632002,
              "children": [
                {
                  "orgId": "1258213117681528834",
                  "orgName": "广州事业部",
                  "orgType": "Department",
                  "sort": 4,
                  "parentId": 1252523599903072259,
                  "id": 1258213117681528834,
                  "hasChildren": false
                },
                {
                  "orgId": "1262948390862667777",
                  "orgName": "华为事业部",
                  "orgType": "Department",
                  "sort": 3,
                  "parentId": 1252523599903072259,
                  "id": 1262948390862667777,
                  "hasChildren": false
                },
                {
                  "orgId": "1270918348722712577",
                  "orgName": "人力资源",
                  "orgType": "Department",
                  "sort": 1,
                  "parentId": 1252523599903072259,
                  "children": [
                    {
                      "orgId": "1295550457344331778",
                      "orgName": "人事部",
                      "orgType": "Department",
                      "sort": 1,
                      "parentId": 1270918348722712577,
                      "id": 1295550457344331778,
                      "hasChildren": false
                    }
                  ],
                  "id": 1270918348722712577,
                  "hasChildren": false
                },
                {
                  "orgId": "1285870672515776514",
                  "orgName": "后端小组",
                  "orgType": "Department",
                  "sort": 2,
                  "parentId": 1252523599903072259,
                  "children": [
                    {
                      "orgId": "1270918521028915201",
                      "orgName": "技术部",
                      "orgType": "Department",
                      "sort": 1,
                      "parentId": 1285870672515776514,
                      "id": 1270918521028915201,
                      "hasChildren": false
                    }
                  ],
                  "id": 1285870672515776514,
                  "hasChildren": false
                }
              ],
              "id": 1252523599903072259,
              "hasChildren": false
            },
            {
              "orgId": "1262951706451591170",
              "orgName": "易宝深圳分公司",
              "orgType": "Department",
              "sort": 1,
              "parentId": 1262947492677632002,
              "id": 1262951706451591170,
              "hasChildren": false
            }
          ],
          "id": 1262947492677632002,
          "hasChildren": false
        },
        {
          "orgId": "1262951769911410689",
          "orgName": "化工集团",
          "orgType": "Company",
          "sort": 2,
          "parentId": 1252523599903072257,
          "id": 1262951769911410689,
          "hasChildren": false
        },
        {
          "orgId": "1262951869450633218",
          "orgName": "OA自动化办公",
          "orgType": "Department",
          "sort": 4,
          "parentId": 1252523599903072257,
          "id": 1262951869450633218,
          "hasChildren": false
        }
      ],
      "id": 1252523599903072257,
      "hasChildren": false
    }
  ],
  "resMsg": "操作成功"
}


export default {
  data() {
    return {
      value: null,
      data: MOCK_DATA.response
    }
  },
}
</script>
```
:::

### TreeSelect Attributes
| 参数            | 说明            | 类型                      | 可选值 | 默认值 |
| --------------- | --------------- | ------------------------- | ------ | ------ |
| value / v-model | 绑定值          | boolean / string / number | —      | —      |
| first-option    | 第一个值        | object                    | —      | —      |
| option-list     | select的options | Array                     | —      | []     |

### TreeSelect Events
| 事件名称 | 说明                 | 回调参数     |
| -------- | -------------------- | ------------ |
| change   | 选中值发生变化时触发 | 目前的选中值 |

### TreeSelect Slots
| name  | 说明           |
| ----- | -------------- |
| empty | 无选项时的列表 |

### Methods
| 方法名 | 说明                            | 参数                                             |
| ------ | ------------------------------- | ------------------------------------------------ |
| focus  | 使 input 获取焦点               | -                                                |
| blur   | 使 input 失去焦点，并隐藏下拉框 | -                                                |
| load   | 加载函数,滚动到底部的时候调用   | {pageNo:number, pageSize:number, search: string} |
