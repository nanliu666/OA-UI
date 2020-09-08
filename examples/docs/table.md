# table表格

基于 elementUI 封装的 table 组件，支持所有 elementUI table 组件配置项 [文档](https://element.eleme.cn/2.12/#/zh-CN/component/table)，另外多选功能做了跨分页多选

:::demo 
```html
<mg-table
  :columns="columns"
  :data="tableData"
  :config="tableConfig"
  :page="page"
  :page-config="pageConfig"
  @current-page-change="handleCurrentPageChange"
>
  <template slot="multiSelectMenu" slot-scope="{ selection }">
    <el-button type="text" @click="handleSelectionClick(selection)">
      删除
    </el-button>
  </template>
  <template slot="topMenu">
    <el-input placeholder="请输入名称" style="width:200px; " />
  </template>
  <template slot="expand">
    展开行
  </template>
  <template slot="name" slot-scope="{ row }">
    <mg-tag>{{ row.name }}</mg-tag>
  </template>
  <template slot="name-header" slot-scope="{ column }">
    <mg-tag>{{ column.label }}</mg-tag>
  </template>
  <template slot="handler">
    <el-button type="text">
      编辑
    </el-button>
  </template>
</mg-table>

<script>
const list = [
  [
    {
      id: '1',
      date: '2016-05-02',
      name: '王小虎1',
      address: '上海市普陀区金沙江路 1518 弄'
    },
    {
      id: '2',
      date: '2016-05-04',
      name: '王小虎2',
      address: '上海市普陀区金沙江路 1517 弄'
    },
    {
      id: '3',
      date: '2016-05-01',
      name: '王小虎3',
      address: '上海市普陀区金沙江路 1519 弄'
    }
  ],
  [
    {
      id: '4',
      date: '2016-05-02',
      name: '王小虎4',
      address: '上海市普陀区金沙江路 1518 弄'
    },
    {
      id: '5',
      date: '2016-05-04',
      name: '王小虎5',
      address: '上海市普陀区金沙江路 1517 弄'
    },
    {
      id: '6',
      date: '2016-05-01',
      name: '王小虎6',
      address: '上海市普陀区金沙江路 1519 弄'
    }
  ]
]
export default {
  data() {
    return {
      columns: [
        // {
        //   prop: 'expand',
        //   type: 'expand',
        //   slot: true
        // },
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name',
          slot: true
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],
      tableData: list[0],
      tableConfig: {
        // showIndexColumn: false,
        showHandler: true,
        enableMultiSelect: true
      },
      page: {
        size: 3,
        total: 6,
        currentPage: 1
      },
      pageConfig: {
        pageSizes: [3, 6]
      }
    }
  },
  methods: {
    handleSelectionClick(selection) {
      console.log('selection:', selection)
    },
    handleCurrentPageChange(current) {
      this.tableData = list[current - 1]
    }
  }
}
</script>
```
:::

### Attributes

| 参数       | 说明                                                    |  类型   | 默认值 |
| :--------- | :------------------------------------------------------ | :-----: | :----: |
| data       | 表格数据                                                |  Array  |   -    |
| columns    | 列配置,详情见下方 Column 属性                           |  Array  |   -    |
| loading    | 加载状态                                                | Boolean | false  |
| config     | 表格配置项，详情见下方 Config 属性                      | Object  |   -    |
| page       | 分页参数,包括:size,total,currentPage,不传时不显示分页器 | Object  |  null  |
| pageConfig | 分页器配置项，详情见下方 PageConfig 属性                | Object  |   -    |

### Column Attributes 

除此之外支持所有 el-table-column attributes

| 参数 | 说明                         |  类型   | 默认值 |
| :--- | :--------------------------- | :-----: | :----: |
| slot | 开启 slot 支持，用于自定义列 | Boolean | false  |

### Config Attributes

除此之外支持所有 el-table attributes

| 参数              | 说明                                                                                                                                                                                     |         类型         |                    默认值                    |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------: | :------------------------------------------: |
| enableMultiSelect | 是否支持多选                                                                                                                                                                             |       Boolean        |                    false                     |
| showHandler       | 是否显示操作列                                                                                                                                                                           |       Boolean        |                    false                     |
| handlerColumn     | 操作列配置，showHandler 为 true 时有效                                                                                                                                                   |        Objext        | {label: '操作',minWidth: 100,fixed: 'right'} |
| highlightSelect   | 是否高亮选中行，仅多选时有效                                                                                                                                                             |       Boolean        |                     true                     |
| showIndexColumn   | 是否显示序号列                                                                                                                                                                           |       Boolean        |                    false                     |
| rowKey            | 行数据的 Key，用来优化 Table 的渲染；在使用 多选 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。 | Function(row)/String |                      --                      |


### PageConfig Attributes

除此之外支持所有 mg-pagination attributes

| 参数            | 说明                   |  类型  | 默认值 |
| :-------------- | :--------------------- | :----: | :----: |
| customClassName | 自定义分页器 className | String |   -    |

### Slot

| name                     | 说明                                                                 |           参数           |
| :----------------------- | :------------------------------------------------------------------- | :----------------------: |
| 列的 prop 值             | 自定义列的内容,当列的 slot 属性设置为 true 时有效                    | { row, column, \$index } |
| 列的 prop 值 + '-header' | 自定义表头的内容,当列的 slot 属性设置为 true 时有效                  |   { column, \$index }    |
| handler                  | 自定义操作栏的内容                                                   | { row, column, \$index } |
| multiSelectMenu          | 自定义多选操作列内容，enableMultiSelect 为 true 时有效，勾选行时显示 |      { selection }       |
| topMenu                  | 自定义顶部操作，勾选行时不显示                                       |            -             |

### Events

除此之外支持所有 el-table events

注： 因为添加了跨分页多选的功能，selection-change会在切换分页设置勾选状态时调用多次

| 事件名称            | 说明                     |   参数   |
| :------------------ | :----------------------- | :------: |
| current-page-change | currentPage 改变时会触发 |  当前页  |
| page-size-change    | pageSize 改变时会触发    | 每页条数 |

### Methods

支持所有 el-table 的 methods