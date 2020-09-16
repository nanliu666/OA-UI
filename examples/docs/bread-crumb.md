## Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面，以及可以跳转到访问过的同级页面（带下拉框选项的面包屑）。
+ 注释：路径大于4个以上，面包屑会自动收缩。收缩的页面名称中不能点击的效果跟可点击效果选中区分，以及下拉框的title跟内容添加文字缩进区分。
+ 注释：路径名大于8个字符，出现超长省略效果。

### 基本用法

适用于访问路径记录，页面跳转

:::demo 在组件中引入该组件，通过设置 `showTimeout` 属性可以设置展开面包屑带平级下拉框的延时;通过设置`addClass`属性,可以给面包屑添加类名，用于自定义图标。通过设置 `navList` 属性来定义面包屑的数据，具体格式见demo。

```html
<template>
   <mg-bread-crumb :showTimeout = "showTimeout" :navList="breadCrumbList"></mg-bread-crumb>
</template>

<script>
   export default {
     data() {
       return {
         showTimeout:100,
         breadCrumbList:[
           {
             navName:"处理中心",
             childrenNav:[],
             path:'/component/list'
           },
           {
             navName:"文字超长面包屑的展示方式",
             childrenNav:[],
             path:'/component/date-picker'
           },
           {
             navName:"文学订阅中心啦啦",
             childrenNav:[
               {
                 subNavName:"订阅中心1",
                 path:'/component/input'
               },
               {
                 subNavName:"订阅中心2",
                 path:'/component/input'
               },
               {
                 subNavName:"订阅中心3",
                 path:'/component/input'
               },
               {
                 subNavName:"我的订阅",
                 path:'/component/bread-crumb'
               }
             ],
           },
           {
             navName:"我的订阅",
             childrenNav:[],
             path:'/component/bread-crumb'
           }
         ]
       }
     },
   }
</script>
```
:::

### 自定义面包屑路径名图标


:::demo 在组件中引入该组件，通过设置`addClass`属性,可以给面包屑添加类名，用于自定义图标。通过设置 `navList` 属性来定义面包屑的数据，具体格式见demo。

```html
<template>
   <mg-bread-crumb :addClass="breadCrumbClass" :navList="breadCrumbList"></mg-bread-crumb>
</template>

<style>
  .hasIcon .el-menu--horizontal .el-menu-item:first-child{
    padding-left: 20px;
    background: url("https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/hot_search/mark-icon-1@1x-c1226bc3ad.png") no-repeat left center/14px 14px;
  }
  .hasIcon .el-menu--horizontal .el-menu-item:nth-child(2){
    padding-left: 20px;
    background: url(//exp.bdstatic.com/static/exp-pc/article/widget/img-baidu-com/article-sprite-v1_feb6c03.png) no-repeat 0 -384px;
  }
</style>

<script>
   export default {
     data() {
       return {
         breadCrumbClass: "hasIcon",
         breadCrumbList:[
           {
             navName:"处理中心",
             childrenNav:[],
             path:'/component/list'
           },
           {
             navName:"文字超长面包屑的展示方式",
             childrenNav:[],
             path:'/component/date-picker'
           },
           {
             navName:"文学订阅中心啦啦",
             childrenNav:[
               {
                 subNavName:"订阅中心1",
                 path:'/component/input'
               },
               {
                 subNavName:"订阅中心2",
                 path:'/component/input'
               },
               {
                 subNavName:"订阅中心3",
                 path:'/component/input'
               },
               {
                 subNavName:"我的订阅",
                 path:'/component/bread-crumb'
               }
             ],
           },
           {
             navName:"我的订阅",
             childrenNav:[],
             path:'/component/bread-crumb'
           }
         ]
       }
     },
   }
</script>
```
:::

### 4个以上路径自动折叠效果

不用做特殊处理，鼠标放入`...`,自动展开折叠内容。
:::demo 在组件中引入该组件，通过设置 `showTimeout` 属性可以设置展开面包屑带平级下拉框的延时;通过设置 `navList` 属性来定义面包屑的数据，具体格式见demo;

```html
<template>
   <mg-bread-crumb :showTimeout = "showTimeout" :navList="breadCrumbList"></mg-bread-crumb>
</template>

<script>
   export default {
     data() {
       return {
         showTimeout:100,
         breadCrumbList:[
           {
             navName:"处理中心",
             childrenNav:[],
             path:'/component/list'
           },
           {
             navName:"我的工作台我的工作台我的工作台",
             childrenNav:[
               {
                 subNavName:"工作台1",
                 path:'/component/date-picker'
               },
               {
                 subNavName:"工作台2",
                 path:'/component/date-picker'
               },
               {
                 subNavName:"工作台3",
                 path:'/component/select'
               }
             ]
           },
           {
             navName:"消息中心",
             childrenNav:[],
             path:'/component/select'
           },
           {
             navName:"文字超长面包屑的展示方式",
             childrenNav:[],
             path:'/component/table'
           },
           {
             navName:"文学订阅中心啦啦",
             childrenNav:[
               {
                 subNavName:"订阅中心1",
                 path:'/component/tree'
               },
               {
                 subNavName:"订阅中心2",
                 path:'/component/tree'
               },
               {
                 subNavName:"订阅中心3",
                 path:'/component/tree'
               },
               {
                 subNavName:"我的订阅",
                 path:'/component/bread-crumb'
               }
             ],
           },
           {
             navName:"我的订阅",
             childrenNav:[],
             path:'/component/bread-crumb'
           }
         ]
       }
     },
   }
</script>

```
:::

### Breadcrumb Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| showTimeout | 同级下拉框出现的延时 | number | — | 300 |
| addClass | 自定义添加类名 | string | — | - |
| navList | 面包屑路径数据 | array | — | - |

### Breadcrumb navList Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| navName   | 路径名称 | string | — | — |
| path      | 路由跳转对象，同 `vue-router` 的 `to` | string | — | — |
| childrenNav   | 带下拉框的同级其他路径，`subNavName`为下拉框中的路径名，`path`为下拉框跳转路由地址 | array | — | - |
