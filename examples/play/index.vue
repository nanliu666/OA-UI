<template>
  <div>
    <mg-comment v-model="input" />
  </div>
  <div style="margin: 20px;">
    <mg-input placeholder="请输入" v-model="input"></mg-input>
    <div style="margin: 20px;">
      <mg-bread-crumb :showTimeout = "showTimeout" :addClass="breadCrumbClass" :navList="breadCrumbList"></mg-bread-crumb>
    </div>
  </div>
</template>
<style>
  .hasIcon .el-menu-item{
    padding-left: 20px;
    background: url("https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/hot_search/mark-icon-1@1x-c1226bc3ad.png") no-repeat left center/14px 14px;
  }
</style>
<script>
// import mgInput from '../'
// import child from '../components/child.vue';
export default {
  data() {
    return {
      input: 'Hello Word!',
      input1: 'Hello',
      value: null,
      breadCrumbList: [
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
          navName:"文学订阅中心啦啦",
          childrenNav:[
            {
              subNavName:"订阅中心1",
              path:'http://www.baidu.com'
            },
            {
              subNavName:"订阅中心2",
              path:'http://map.baidu.com'
            },
            {
              subNavName:"订阅中心3",
              path:'http://www.baidu.com'
            },
            {
              subNavName:"我的订阅",
              path:'http://www.baidu.com'
            }
          ],
          path:'http://www.baidu.com'
        },
        {
          navName:"我的订阅",
          childrenNav:[],
          path:'http://map.baidu.com'
        }
      ]
    }
  },

  mounted() {},

  methods: {
  }
}
</script>
