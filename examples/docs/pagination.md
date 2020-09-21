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
    <a-pagination show-quick-jumper :default-current="2" :total="500" @change="onChange" />
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

```
:::