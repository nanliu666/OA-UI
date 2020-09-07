## Loading 加载中

### 定义

用于页面和区块的加载中状态。

### 何时使用

页面局部处于等待异步数据或正在渲染过程时

### 代码演示

:::demo 基本用法：一个简单的loading状态
```html
<template>
  <el-table
    v-mgLoading="loading"
    mg-loading-text="加载中"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<style>
  body {
    margin: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        loading: true
      };
    }
  };
</script>
```
:::


:::demo 容器：放入一个容器中
```html
<template>
  <el-table
    v-mgLoading="loading"
    mg-loading-text="拼命加载中"
    mg-loading-spinner="el-icon-loading"
    mg-loading-background="rgba(0, 0, 0, 0.8)"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        loading: true
      };
    }
  };
</script>
```
:::

:::demo 各种大小：小的用于文本加载，默认用于卡片容器级加载

```html
<template>
  <el-button
    type="primary"
    @click="openFullScreen1"
    v-mgLoading.fullscreen.lock="fullscreenLoading">
    指令方式
  </el-button>
  <el-button
    type="primary"
    @click="openFullScreen2">
    服务方式
  </el-button>
</template>

<script>
  export default {
    data() {
      return {
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen1() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$mgLoading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
    }
  }
</script>
```
:::

### 服务
Loading 还可以以服务的方式调用。引入 Loading 服务：
```javascript
import { Loading } from 'mage-ui';
```
在需要调用时：
```javascript
Loading.service(options);
```
其中 `options` 参数为 Loading 的配置项，具体见下表。`LoadingService` 会返回一个 Loading 实例，可通过调用该实例的 `close` 方法来关闭它：
```javascript
let loadingInstance = Loading.service(options);
this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
  loadingInstance.close();
});
```
需要注意的是，以服务的方式调用的全屏 Loading 是单例的：若在前一个全屏 Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading 的实例：
```javascript
let loadingInstance1 = Loading.service({ fullscreen: true });
let loadingInstance2 = Loading.service({ fullscreen: true });
console.log(loadingInstance1 === loadingInstance2); // true
```
此时调用它们中任意一个的 `close` 方法都能关闭这个全屏 Loading。

如果完整引入了 Element，那么 Vue.prototype 上会有一个全局方法 `$mgLoading`，它的调用方式为：`this.$mgLoading(options)`，同样会返回一个 Loading 实例。

### Options
| 参数        | 说明                                                                                                                                       | 类型          | 可选值 | 默认值        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------- | ------ | ------------- |
| target      | Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 `document.querySelector`以获取到对应 DOM 节点 | object/string | —      | document.body |
| body        | 同 `v-mgLoading` 指令中的 `body` 修饰符                                                                                                    | boolean       | —      | false         |
| fullscreen  | 同 `v-mgLoading` 指令中的 `fullscreen` 修饰符                                                                                              | boolean       | —      | true          |
| lock        | 同 `v-mgLoading` 指令中的 `lock` 修饰符, 用于禁用在loading状态下的屏幕滚动行为                                                             | boolean       | —      | false         |
| text        | 显示在加载图标下方的加载文案                                                                                                               | string        | —      | —             |
| spinner     | 自定义加载图标类名                                                                                                                         | string        | —      | —             |
| background  | 遮罩背景色                                                                                                                                 | string        | —      | —             |
| customClass | Loading 的自定义类名                                                                                                                       | string        | —      | —             |