<template>
  <div style="margin: 20px;">
    <mg-input placeholder="请输入" v-model="input"></mg-input>
    <div style="margin: 20px;">
      <mg-bread-crumb :default-active ="activeIndex" :index="activeIndex" :showTimeout = "showTimeout" :addClass="breadCrumbClass" :navList="breadCrumbList"></mg-bread-crumb>
    </div>
    <!--<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
      <!--<el-menu-item index="1">处理中心</el-menu-item>-->
      <!--<el-submenu index="2">-->
        <!--<template slot="title">我的工作台</template>-->
        <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
        <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
        <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
        <!--<el-submenu index="2-4">-->
          <!--<template slot="title">选项4</template>-->
          <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
          <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
          <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
        <!--</el-submenu>-->
      <!--</el-submenu>-->
      <!--<el-menu-item index="3" disabled>消息中心</el-menu-item>-->
      <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
    <!--</el-menu>-->
    <!--<div>-->
      <!--<el-breadcrumb separator-class="el-icon-arrow-right">-->
        <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
        <!--<el-breadcrumb-item>活动管理</el-breadcrumb-item>-->
        <!--<el-breadcrumb-item>活动列表</el-breadcrumb-item>-->
        <!--<el-breadcrumb-item>活动详情</el-breadcrumb-item>-->
      <!--</el-breadcrumb>-->
    <!--</div>-->

  </div>
</template>
<script>
export default {
  data() {
    return {
      input: 'Hello Word!',
      showTimeout:100,
      breadCrumbClass: "hasIcon",
      activeIndex: '1',
      breadCrumbList:[
        {
          navName:"处理中心",
          childrenNav:[],
          path:'https://element.eleme.cn/#/zh-CN'
        },
        {
          navName:"我的工作台我的工作台我的工作台",
          childrenNav:[
            {
              subNavName:"工作台1",
              path:'http://www.baidu.com'
            },
            {
              subNavName:"工作台2",
              path:'http://map.baidu.com'
            },
            {
              subNavName:"工作台3",
              path:'http://www.baidu.com'
            }
          ]
        },
        {
          navName:"消息中心",
          childrenNav:[],
          path:'http://www.baidu.com'
        },
        {
          navName:"文字超长面包屑的展示方式",
          childrenNav:[],
          path:'http://www.baidu.com'
        },
        {
          navName:"订阅中心",
          childrenNav:[],
          path:'http://www.baidu.com'
        }
      ]
    }
  },
}
</script>
