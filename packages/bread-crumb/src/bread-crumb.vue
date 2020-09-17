<template>
  <div class="nav-bread-out" :class="addClass">
    <div class="nav-bread-con" v-if="navList.length<=4">
      <el-menu class="el-menu-demo"  mode="horizontal" >
      <div class="el-menu-item" v-for="(item, index) in navList" :key="index">
        <div v-if="item.childrenNav.length<=0">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="breadNav">
            <el-breadcrumb-item :to="{ path: item.path}" :title="item.navName.length>8?item.navName:''" >{{item.navName}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-submenu  v-bind:key="index" :show-timeout="showTimeout" v-else :index="'t'+index">
          <template slot="title">
            <span :title="item.navName.length>8?item.navName:''" class="selectNavTitle">
               {{item.navName}}
            </span>
            <span class="brand-arrow-right el-breadcrumb__separator el-icon-arrow-right"></span>
          </template>
          <div v-for="(subitem, subindex) in item.childrenNav" :key="subindex">
            <el-menu-item index="index+'-'+subindex" class="breadSubNav" >
              <el-breadcrumb separator-class="el-icon-arrow-right">
               <el-breadcrumb-item :to="{ path: item.path}">{{subitem.subNavName}}</el-breadcrumb-item>
              </el-breadcrumb>
            </el-menu-item>
          </div>

        </el-submenu>

      </div>
      <!--<el-menu-item><span id="currentPage" style="cursor: text">当前页面</span></el-menu-item>-->
    </el-menu>
    </div>
    <div class="nav-bread-con long-nav-bread" v-else-if="navList.length>4">
      <el-menu class="el-menu-demo" mode="horizontal">
        <div class="el-menu-item" v-for="(item, index) in navList" :key="index">
          <div v-if="item.childrenNav.length<=0 && (index===0||index === navList.length-2||index === navList.length-1)">
            <el-breadcrumb separator-class="el-icon-arrow-right" class="breadNav">
              <el-breadcrumb-item :to="{ path: item.path}" :title="item.navName.length>8?item.navName:''">{{item.navName}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div v-else-if="index===1">
            <el-dropdown class="flod-drop">
              <span class="el-dropdown-link">
                <span class="flod-drop-title">...</span><i class="el-breadcrumb__separator el-icon-arrow-right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="dropdown-menu">
                <el-dropdown-item v-for="(dropItem, dropIndex) in totalFoldNav" :key="dropIndex">
                  <span v-if="dropItem.path===''" class="drop-group-title">{{dropItem.navName}}</span>
                  <span v-else-if="dropItem.path!=='' && dropItem.level===0" class="drop-group-title-list">
                    <router-link :to="{ path: dropItem.path}">{{dropItem.navName}}</router-link>
                  </span>
                  <span v-else class="dropdown-list">
                    <router-link :to="{ path: dropItem.path}">{{dropItem.navName}}</router-link>
                  </span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <el-submenu  v-bind:key="index" :show-timeout="showTimeout" v-else-if="navList.length>0 && (index===0||index === navList.length-2||index === navList.length-1)" :index="'t'+index">
            <template slot="title">
                <span :title="item.navName.length>8?item.navName:''" class="selectNavTitle">
                  {{item.navName}}
                </span>
              <span class="brand-arrow-right el-breadcrumb__separator el-icon-arrow-right"></span>
            </template>
            <div v-for="(subitem, subindex) in item.childrenNav" :key="subindex">
              <el-menu-item class="breadSubNav" >
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item :to="{ path: item.path}">{{subitem.subNavName}}</el-breadcrumb-item>
                </el-breadcrumb>
              </el-menu-item>
            </div>

          </el-submenu>

        </div>
        <!--<el-menu-item><span id="currentPage" style="cursor: text">当前页面</span></el-menu-item>-->
      </el-menu>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'MgBreadCrumb',
        mgName: 'MgBreadCrumb',
      props:{
        addClass:{
          type:String,
          default:''
        },
        showTimeout:{
          type: Number,
          default:300,
        },
        navList:{
          type: Array,
          default: () => []
        }
      },
      data(){
          return {
            totalFoldNav : []
          }
      },
      created() {
        let navList = this.navList;
        let len = navList.length;
          if(len>4){
            let foldNav = []; //折叠的面包屑nav数组
            let totalFoldNav = [];//转换成平铺list折叠数组
            for(var i=0;i<navList.length;i++){
              if(i!==0 && i!==navList.length-1 && i!==navList.length-2){
                foldNav.push(navList[i]);
              }
            }
            // this.totalFoldNav = totalFoldNav;
            if(foldNav.length>0){
              for(var j=0;j<foldNav.length;j++){
                totalFoldNav.push({navName:foldNav[j].navName,path:foldNav[j].path || '',level:0});
                if(foldNav[j].childrenNav.length>0){
                  for(var k=0;k<foldNav[j].childrenNav.length;k++){
                    totalFoldNav.push({
                      navName:foldNav[j].childrenNav[k].subNavName,
                      path:foldNav[j].childrenNav[k].path || '',
                    })
                  }
                }
              }
            }
            this.totalFoldNav = totalFoldNav;
            console.log('totalFoldNav',totalFoldNav);
          }
      }
    }
</script>

<style scoped>
  .selectNavTitle{
    max-width: 125px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
  }
.nav-bread-out .el-menu.el-menu--horizontal{
  border-bottom: none;
}
  .nav-bread-out .el-menu--horizontal>.el-menu-item {
    border: none;
    height: 20px;
    line-height: 20px;
    padding: 0;
    color: #757C85;
  }
.nav-bread-out .el-breadcrumb{
  line-height: 18px;
}
  .brand-arrow-right{
    float: right;
    margin-top: 3px;
  }
  .el-menu--horizontal .el-menu .breadSubNav{
    padding: 0;
  }
.el-menu--horizontal .el-menu .el-menu-item .el-breadcrumb{
  line-height: 36px;
  overflow: hidden;
  cursor: pointer;
}

.el-menu--horizontal .el-menu .el-menu-item .el-breadcrumb:hover .el-breadcrumb__inner{
  outline: 0;
  color: #198CFF;
}
#currentPage{
  color: #303133;
}
.flod-drop{
  vertical-align: baseline;
}
  .flod-drop-title{
    padding: 0 8px;
    color: #757C85;
  }
  .flod-drop-title:hover{
    color: #198CFF;
  }
  .dropdown-menu .el-dropdown-menu__item {
    padding: 0;
  }
  .dropdown-menu .el-dropdown-menu__item:hover{
    background: transparent;
    color: #909399;
  }
  .dropdown-menu .dropdown-list{
    display: inline-block;
    width: 100%;
    font-size: 14px;
    padding: 0 14px 0 20px;
    box-sizing: border-box;
  }
  .dropdown-menu .dropdown-list a{
    color: #909399;
  }
  .dropdown-menu .el-dropdown-menu__item:hover .dropdown-list, .dropdown-menu .el-dropdown-menu__item:hover .drop-group-title-list{
    background-color: #e9f2ff;

  }
  .dropdown-menu .el-dropdown-menu__item:hover .dropdown-list a, .dropdown-menu .el-dropdown-menu__item:hover .drop-group-title-list a{
    color: #198CFF;
  }
  .dropdown-menu .drop-group-title{
    font-size: 12px;
    padding: 0 14px;
    color: #909399;
    cursor: text;
    line-height: 30px;
  }
  .dropdown-menu .drop-group-title:hover{
    background: transparent;
  }
  .dropdown-menu .drop-group-title-list{
    font-size: 12px;
    padding: 0 14px;
    color: #909399;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
  }
  .dropdown-menu .drop-group-title-list a{
    color: #909399;
  }
</style>
<style>
  .nav-bread-out .el-menu--horizontal .el-submenu .el-submenu__title{
    color: #757C85;
    height: 20px;
    line-height: 18px;
    padding: 0;
    border: none;
  }
  .nav-bread-out .el-submenu__title:hover {
    background-color:transparent;
  }
  .nav-bread-out .el-submenu__title:hover .selectNavTitle{
    color: #198CFF;
  }
  .nav-bread-out .el-breadcrumb__item:last-child .el-breadcrumb__separator{
    display: inline-block;
  }
  .nav-bread-out .el-icon-arrow-right{
    color: #757C85;
  }
  .nav-bread-out .el-menu--horizontal .el-submenu .el-submenu__icon-arrow {
    position: static;
    vertical-align: middle;
    margin-left: 8px;
    margin-top: 0;
  }
  .breadNav .el-breadcrumb__item:last-child .el-breadcrumb__inner{
    cursor: pointer;
    color: #757C85;
    max-width: 125px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
  }
  .breadNav .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
    color: #198CFF;
  }
  .breadSubNav .el-breadcrumb__item{
    display: block;
    width: 100%;
  }
  .breadSubNav .el-breadcrumb__item:last-child .el-breadcrumb__inner{
    display: block;
    color: #757C85;
    cursor: pointer;
    padding: 0 10px;
  }
  .breadSubNav .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
    background-color: #e9f2ff;
    color: #198CFF;
  }
  .nav-bread-out .el-menu .el-menu-item:last-child .el-breadcrumb__inner{
    color: #202940;
  }
  .nav-bread-out .el-menu .el-menu-item:last-child .el-icon-arrow-right{
    display: none;
  }
</style>
