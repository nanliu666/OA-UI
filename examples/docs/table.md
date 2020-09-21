## Table表格
展示行列数据。
<!-- 详细文档见[Ant-Design-Vue Table](https://antdv.com/components/table-cn/) -->
  
### 何时使用
* 当有大量结构化的数据需要展现时；
* 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

### 基础用法
  
:::demo
```html
<template>
  <mg-table
    ref="table"
    :columns="columns"
    :data-source="dataSource"
    row-key="id"
  >
    <template #handler="{row}">
      <a-button @click="()=> handleBuy(row)">
        购买
      </a-button>
    </template>
  </mg-table>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          title: 'col1',
          dataIndex: 'prop1'
        },
        {
          title: 'col2',
          dataIndex: 'prop2'
        },
        {
          title: 'col3',
          dataIndex: 'prop3'
        }
      ],
      dataSource: [
        { prop1: 'Apple', prop2: 'Banana', prop3: 'pineapple',id: 1 },
        { prop1: 'foo', prop2: 'bar', prop3: 'foo-bar',id: 2 },
        { prop1: 'col1', prop2: 'col2', prop3: 'col3',id: 3 },
      ]
    }
  },
  methods: {
    handleBuy(row){
      console.log(row)
    }
  }
}
</script>
```
:::

### 多级表头

:::demo
```html
<template>
  <a-table
    :columns="columns"
    :data-source="data"
    bordered
    size="middle"
    :scroll="{ x: 'calc(700px + 50%)', y: 240 }"
  />
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'John',
        value: 'John',
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
  },
  {
    title: 'Other',
    children: [
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 200,
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Address',
        children: [
          {
            title: 'Street',
            dataIndex: 'street',
            key: 'street',
            width: 200,
          },
          {
            title: 'Block',
            children: [
              {
                title: 'Building',
                dataIndex: 'building',
                key: 'building',
                width: 100,
              },
              {
                title: 'Door No.',
                dataIndex: 'number',
                key: 'number',
                width: 100,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Company',
    children: [
      {
        title: 'Company Address',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
        width: 200,
      },
      {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName',
      },
    ],
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 80,
    fixed: 'right',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M',
  });
}

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
```
:::

### 异步加载数据

:::demo 这个例子通过简单的 ajax 读取方式，演示了如何从服务端读取并展现数据，具有筛选、排序等功能以及页面 loading 效果。开发者可以自行接入其他数据处理方式。 另外，本例也展示了筛选排序功能如何交给服务端实现，列不需要指定具体的 onFilter 和 sorter 函数，而是在把筛选和排序的参数发到服务端来处理。 注意，此示例使用 模拟接口，展示数据可能不准确，请打开网络面板查看请求。
```html
<template>
  <mg-table
    :columns="columns"
    :row-key="(record) => record.key"
    :data-source="data"
    :page.sync="page"
    :loading="loading"
    @change="handleTableChange"
  >
    <template
      slot="name"
      slot-scope="name"
    >
      {{ name.first }} {{ name.last }}
    </template>
  </mg-table>
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%'
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' }
    ],
    width: '20%'
  },
  {
    title: 'Email',
    dataIndex: 'email'
  }
]

export default {
  data() {
    return {
      data: [],
      page: {
        current: 1,
        pageSize: 5,
        total: 100
      },
      loading: false,
      columns
    }
  },
  mounted() {
    this.fetch(this.page)
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      this.fetch(this.page)
    },
    fetch({ current, pageSize }) {
      const sum = (current - 1) * pageSize
      this.loading = true
      return new Promise((resolve) => {
        setTimeout(
          () =>
            resolve(
              new Array(pageSize).fill().map((_, i) => ({
                key: i + sum,
                name: `name${i + sum}`,
                gender: `${i % 2 ? 'male' : 'female'}`,
                email: `email${i + sum}@epro.com.cn`
              }))
            ),
          1000
        )
      })
        .then((result) => (this.data = result))
        .finally(() => (this.loading = false))
    }
  }
}
</script>
```
:::


### 属性
| 参数          | 说明                                                            | 类型            | 可选值 | 默认值                                                                                               |
| ------------- | --------------------------------------------------------------- | --------------- | ------ | ---------------------------------------------------------------------------------------------------- |
| page          | 页码配置,支持`.sync`修饰符                                      | object          | —      | `{current: 1, pageSize:0, total: 0}`                                                                 |
| handlerConfig | columns中的handler列配置,在没有使用`handler`插槽的时候为`false` | object\|boolean | —      | `{title: '操作', dataIndex: '_handler', fixed: 'right', scopedSlots: { customRender: 'hand ler' } }` |

### 插槽 
| name           | 说明                 | 参数                 |
| -------------- | -------------------- | -------------------- |
| multiSelection | 触发文件选择框的内容 | `{selectionRowKeys}` |
| topMenu        | 顶部菜单             | -                    |
| handler        | 操作列               | `{row, text, index}` |

:::tip
支持 ant-design-vue Table组件所有的属性与插槽,上列表为mg-table组件的扩展,相同属性与插槽略
:::