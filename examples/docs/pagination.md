## Pagination 分页
采用分页的形式分隔长列表，每次只加载一个页面。

### 何时使用
* 当加载/渲染所有数据将花费很多时间时；
* 可切换页码浏览数据。

### 基础用法
:::demo
```html
<template>
  <a-pagination v-model="current" :total="50" show-less-items />
</template>
<script>
export default {
  data() {
    return {
      current: 2,
    };
  },
};
</script>
```
:::

### 跳转

:::demo
```html
<template>
  <div>
    <a-pagination :total="50" show-size-changer show-quick-jumper />
    <br />
    <a-pagination
      show-quick-jumper
      :default-current="2"
      :total="500"
      disabled
      show-less-items
      @change="onChange"
    />
  </div>
</template>
<script>
export default {
  methods: {
    onChange(pageNumber) {
      console.log('Page: ', pageNumber);
    },
  },
};
</script>
```
:::

### 常规分页-统计区
通过设置 showTotal 展示总共有多少数据。
:::demo
```html
<template>
  <div>
    <a-pagination
      :total="85"
      :show-total="total => `总共 ${total} 条数据`"
      :page-size="20"
      :default-current="1"
    />
    <br />
    <a-pagination
      :total="85"
      :show-total="(total, range) => `第${range[0]}至第${range[1]}条数据，总共 ${total} 条数据`"
      :page-size="20"
      :default-current="1"
    />
  </div>
</template>
```
:::
###  迷你版单页展示数显示
:::demo
```html
<template>
  <div id="components-pagination-demo-mini">
    <a-pagination size="small" :total="50" />
    <a-pagination size="small" :total="50" show-size-changer show-quick-jumper />
    <a-pagination style="margin-top: 20px" size="small" :total="50" :show-total="total => `总共 ${total} 条数据`" />
  </div>
</template>
```
:::