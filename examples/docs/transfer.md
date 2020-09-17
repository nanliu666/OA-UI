## Transfer 穿梭框

### 基础用法
:::demo Transfer 的数据通过 `data` 属性传入。数据需要是一个对象数组，每个对象有以下属性：`key` 为数据的唯一性标识，`label` 为显示文本，`disabled` 表示该项数据是否禁止转移。目标列表中的数据项会同步到绑定至 `v-model` 的变量，值为数据项的 `key` 所组成的数组。当然，如果希望在初始状态时目标列表不为空，可以像本例一样为 `v-model` 绑定的变量赋予一个初始值。
```html
<template>
  <mg-transfer
    filterable
    :filter-method="filterMethod"
    filter-placeholder="请输入城市拼音"
    v-model="value"
   
    :data="data"
  ></mg-transfer>
</template>

<script>
  export default {
      data(){
          const generateData = _ => {
        const data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) => {
          data.push({
             disabled: index % 4 === 0,
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
      };
      return {
        data: generateData(),
        value: [],
        filterMethod(query, item) {
            return item.pinyin.indexOf(query) > -1;
          }
      };
    },
    methods:{
      fn(e){
        console.log(e)
      },
     
    }
  };
</script>
```
:::

### 可搜索

在数据很多的情况下，可以对数据进行搜索和过滤。

:::demo 设置 `filterable` 为 `true` 即可开启搜索模式。默认情况下，若数据项的 `label` 属性包含搜索关键字，则会在搜索结果中显示。你也可以使用 `filter-method` 定义自己的搜索逻辑。`filter-method` 接收一个方法，当搜索关键字变化时，会将当前的关键字和每个数据项传给该方法。若方法返回 `true`，则会在搜索结果中显示对应的数据项。
```html
<template>
  <mg-transfer
    filterable
    :filter-method="filterMethod"
      :limit="2"
    filter-placeholder="请输入城市拼音"
    v-model="value"
    :data="data">
  </mg-transfer>
</template>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
      };
      return {
        data: generateData(),
        value: [],

        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        }
      };
    }
  };
</script>
```
:::

### 表格穿梭框

用户需要对包含多属性的数据进行对比选择时，支持配置表格进行选择。

:::demo 设置 `isTransferTable` 为 `true` 即可开启表格穿梭框。表格穿梭框需要配置data和Columns两个数组参数，分别为表格数据和表头参数,表格数据`data`中的`key`值是必须传递的唯一标识字段，表头参数`Columns`可配置`width/minWidth`宽度，类型可为`Number,String`,`right-columns`可配置右表格列表的列数，最大长度为7，`align`可配置列的对齐方式，默认为`left`;注意：不能配置数据项属性别名，不能配置复选框禁用

```html
<template>
 <mg-transfer
      :filterable="true"
      filter-placeholder="请输入姓名"
      v-model="value"
      :isTransferTable="true"
      :limit="10"
      :all-move="true"
      :data="data"
      :columns="Columns"
      :right-columns='2'
      :filter-method="filterMethod"
      @change="handleChange"
    >
    </mg-transfer>
</template>

<script>
  export default {
    data() {
         const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 60; i++) {
          data.push({
            index: i,
            key: i,
            disabled: i % 4 === 0,
            dates: `备选项 ${ i }`,
            name: `aaaa ${ i }`,
            address:`bbb ${ i }`,
          });
        }
        return data;
      };
      return {
       data: generateData(),
        buttonArrows:false,
        Columns: [
        {
          prop: 'index',
          label: '序号',
          width: '50px',
          align:"center",
        },
        {
          prop: 'dates',
          label: '时间',
          minWidth:60
        },
        {
          prop: 'name',
          label: '名字',
          width: '60px'
        },
        {
          prop: 'address',
          label: '地址',
          width: '60px'
        },
         {
          prop: 'disabled',
          label: '禁用状态',
          width: '60px'
        }
        
      ],
        value: [],
        filterMethod(query, item) {
          return item.name.indexOf(query) > -1;
        }
      };
    },
    methods:{
      handleChange(value, direction, movedKeys){
        console.log(value, direction, movedKeys)
      }
    }
  };
</script>
```
:::

### 树形穿梭框

针对有层级关系的数据选择时，支持配置树形控件进行选择。

:::demo 设置 `isTransferTree` 为 `true` 即可开启树形穿梭框。树形穿梭框为穿梭框和树形控件的结合版，以穿梭框参数为主;`data`中`id`是唯一标识符,`children`为指定子树为节点对象的某个属性值,,`props`树形穿梭框中的props为指定渲染的data参数名，说明见文档。注意：树形穿梭框不可使用分页,在配置`left-default-checked`或者`right-default-checked`时如果父级下属的子级都需要被默认选中，那需要把父级id也一起传递进去，否则父级会单独留在左边或者右边

```html
<template>
 <mg-transfer
      :filterable="true"
      filter-placeholder="请输入"
      v-model="value"
      :isTransferTree="true"
      :data="data"
      :props="defaultProps"
       :buttonArrows="true"
      @change="handleChange"
      :left-default-checked="[10,11]"
      :right-default-checked="[3]"
       :all-move="true"
      :filter-method="filterMethod"
      :default-expand-all="true"
    ></mg-transfer>
</template>

<script>
export default {
  data() {
    return {
      value: [3, 4],
      filterMethod(query, item) {
        return item.label.indexOf(query) > -1
      },
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 2,
              label: '二级 1-1',
              
              children: [
                {
                  id: 3,
                  label: '三级 1-1-1',
                  disabled:true
                },
                {
                  id: 4,
                  label: '三级 1-1-2',
                },
                {
                  id: 5,
                  label: '三级 1-1-3',
                  disabled:true

                }
              ]
            },
            {
              id: 6,
              label: '二级 1-2',
              children: [
                {
                  id: 7,
                  label: '三级 1-2-1'
                },
                {
                  id: 8,
                  label: '三级 1-2-2'
                }
              ]
            }
          ]
        },
        {
          id: 9,
          label: '一级 2',
          children: [
            {
              id: 10,
              label: '二级 2-1'
            },
            {
              id: 11,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 12,
          label: '一级 3',
          children: [
            {
              id: 13,
              label: '二级 3-1'
            },
            {
              id: 14,
              label: '二级 3-2',
              children: [
                {
                  id: 15,
                  label: '4级 3-1',
                  children: [
                    {
                      id: 19,
                      label: '5级 3-1'
                    },
                    {
                      id: 50,
                      label: '5级 3-2'
                    }
                  ]
                },
                {
                  id: 16,
                  label: '4级 3-2',
                  children: [
                    {
                      id: 17,
                      label: '5级 3-1'
                    },
                    {
                      id: 18,
                      label: '5级 3-2'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
        disabled: 'disabled'
      }
    }
  },
  methods: {
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys)
    }
  }
}
</script>
```
:::

### 可自定义

可以对列表标题文案、按钮文案、数据项的渲染函数、列表底部的勾选状态文案、列表底部的内容区等进行自定义。

:::demo 可以使用 `titles`、`button-texts`、`render-content` 和 `format` 属性分别对列表标题文案、按钮文案、数据项的渲染函数和列表顶部的勾选状态文案进行自定义。数据项的渲染还可以使用 `scoped-slot` 进行自定义。对于列表底部的内容区，提供了两个具名 slot：`left-footer` 和 `right-footer`。此外，如果希望某些数据项在初始化时就被勾选，可以使用 `left-default-checked` 和 `right-default-checked` 属性。最后，本例还展示了 `change` 事件的用法。注意：由于 jsfiddle 不支持 JSX 语法，所以使用 `render-content` 自定义数据项的例子在 jsfiddle 中无法运行。但是在实际的项目中，只要正确地配置了相关依赖，就可以正常运行。
```html
<template>
  <p style="text-align: center; margin: 0 0 20px">使用 render-content 自定义数据项</p>
  <div style="text-align: center">
    <mg-transfer
      style="text-align: left; display: inline-block"
      v-model="value"
      filterable
      :left-default-checked="[2, 3]"
      :right-default-checked="[1]"
      :render-content="renderFunc"
      :titles="['Source', 'Target']"
      :button-texts="['到左边', '到右边']"
      :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
      @change="handleChange"
      :data="data">
      <el-button class="transfer-footer" slot="left-footer" size="mini">操作</el-button>
      <el-button class="transfer-footer" slot="right-footer" size="mini">操作</el-button>
    </mg-transfer>
  </div>
  <p style="text-align: center; margin: 50px 0 20px">使用 scoped-slot 自定义数据项</p>
  <div style="text-align: center">
    <mg-transfer
      style="text-align: left; display: inline-block"
      v-model="value4"
      filterable
      :left-default-checked="[2, 3]"
      :right-default-checked="[1]"
      :titles="['Source', 'Target']"
      :button-texts="['到左边', '到右边']"
      :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
      
      @change="handleChange"
      :data="data">
      <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
      <el-button class="transfer-footer" slot="left-footer" size="mini">操作</el-button>
      <el-button class="transfer-footer" slot="right-footer" size="mini">操作</el-button>
    </mg-transfer>
  </div>
</template>

<style>
  .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
</style>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1],
        value4: [1],
        renderFunc(h, option) {
          return <span>{ option.key } - { option.label }</span>;
        }
      };
    },

    methods: {
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      }
    }
  };
</script>
```
:::

### 数据项属性别名

默认情况下，Transfer 仅能识别数据项中的 `key`、`label` 和 `disabled` 字段。如果你的数据的字段名不同，可以使用 `props` 属性为它们设置别名。
:::demo 本例中的数据源没有 `key` 和 `label` 字段，在功能上与它们相同的字段名为 `value` 和 `desc`。因此可以使用`props` 属性为 `key` 和 `label` 设置别名。
```html
<template>
  <mg-transfer
    v-model="value"
    :props="{
      key: 'value',
      label: 'desc'
    }"
    :data="data">
  </mg-transfer>
</template>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            value: i,
            desc: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: []
      };
    }
  };
</script>
```
:::

### 无方向键的穿梭框

无方向键，点击选项即移动，适用于用户需要快速选择的场景
:::demo 通过`buttonArrows`来配置是否需要方向键，注意，当配置此参数为`false`也就是无方向键时，`left-default-checked`和`right-default-checked`参数会失效
```html
<template>
  <mg-transfer
    v-model="value"
    :props="{
      key: 'value',
      label: 'desc'
    }"
    :buttonArrows="false"
    :data="data">
  </mg-transfer>
</template>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            value: i,
            desc: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: []
      };
    }
  };
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | array | — | — |
| data | Transfer 的数据源 | array[{ key, label, disabled }] | — | [ ] |
| isTransferTable | 是否设置为表格列表穿梭框(下列表有表格列表参数说明`transfer-table`) | boolean | — | false |
| isTransferTree | 是否设置为树状列表穿梭框(下列表有树状列表参数说明`transfer-tree`) | boolean | — | false |
| filterable | 是否可搜索 | boolean | — | false |
| limit | 开启分页(值就是每页展示的数量);不兼容树形穿梭框 | number | — |  |
| buttonArrows | 是否需要方向键(配置此项后为false可点击移动,多选将失效);注意：设置此参数后`left-default-checked`和`right-default-checked`参数会失效 | boolean | — | true |
| all-move | 底部配置一键全部移动 | boolean | — | false |
| filter-placeholder | 搜索框占位符 | string | — | 请输入搜索内容 |
| filter-method | 自定义搜索方法 | function | — | — |
| target-order | 右侧列表元素的排序策略：若为 `original`，则保持与数据源相同的顺序；若为 `push`，则新加入的元素排在最后；若为 `unshift`，则新加入的元素排在最前 | string | original / push / unshift | original |
| titles | 自定义列表标题 | array | — | ['列表 1', '列表 2'] |
| button-texts | 自定义按钮文案 | array | — | [ ] |
| render-content | 自定义数据项渲染函数 | function(h, option) | — | — |
| format | 列表顶部勾选状态文案 | object{noChecked, hasChecked} | — | { noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' } |
| props | 数据源的字段别名 | object{key, label, disabled} | — | — |
| left-default-checked | 初始状态下左侧列表的已勾选项的 key 数组 | array | — | [ ] |
| right-default-checked | 初始状态下右侧列表的已勾选项的 key 数组 | array | — | [ ] |

### transfer-table
| 参数      | 说明    | 类型      | 可选值       | 默认值   |  是否必填[ y / n ] |   
|---------- |-------- |---------- |-------------  |-------- |-------- |
| data | 显示的数据 | Array[{key,disabled, name...  }注意：`key`值为必须的唯一标识符 |  | [ ] | y |
| right-columns | 右边表格列表的显示列的列数 | Number | 1-7 | 7 | n |
| columns | 表头参数（下列表为可配置的表头参数） | Array |  | [ ] | y |
| width | 对应列的宽度 | String |  |  | n |
| min-width | 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列 | String |  |  | n |
| prop | 表格参数中要展示的相应字段名，如表格需展示name字段，prop:'name' | String | |  | y |
| label | 定义表格的列名 | String |  |  | y |
| align | 对齐方式 | String | left/center/right | left | n |

### transfer-tree
| 参数      | 说明    | 类型      | 可选值       | 默认值   |  是否必填[ y / n ] |   
|---------- |-------- |---------- |-------------  |-------- |-------- |
| data | 显示的数据 | Array[{label,id, disabled,children:[]...  }注意：`id`值为必须的唯一标识符 |  | [ ] | y |
| default-expand-all | 是否默认展开所有节点                               | boolean                     | —    | false  | n |
| accordion |是否每次只打开一个同级树节点展开(与`default-expand-all`参数互斥)                   | boolean                     | —    | false| n |
| indent    | 相邻级节点间的水平缩进，单位为像素                 | number                     | —    | 16 | n |
| icon-class| 自定义树节点的图标                              |  string                     | -    | -    | n |
| check-strictly | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false   | boolean  | —    | false | n |
| expand-on-click-node | 是否在点击节点的时候展开或者收缩节点,默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。 | boolean| — | true | n |
| props | 树形穿梭框中的props为指定渲染的data参数名（下列表为props参数说明） | Object |  |  | y |
| label | 指定节点标签为节点对象的某个属性值 | string, function(data, node) |  |  | y |
| children |  指定子树为节点对象的某个属性值 | string |  |  | y |
| label | 指定节点标签为节点对象的某个属性值 | string, function(data, node) |  |  | y |

### Slot
| name | 说明 |
|------|--------|
| left-footer | 左侧列表底部的内容 |
| right-footer | 右侧列表底部的内容 |

### Scoped Slot
| name | 说明 |
|------|--------|
| — | 自定义数据项的内容，参数为 { option } |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| clearQuery | 清空某个面板的搜索关键词 | 'left' / 'right'，指定需要清空的面板 |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 右侧列表元素变化时触发 | 当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组 |
| left-check-change | 左侧列表元素被用户选中 / 取消选中时触发 | 当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组 |
| right-check-change | 右侧列表元素被用户选中 / 取消选中时触发 | 当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组 |
