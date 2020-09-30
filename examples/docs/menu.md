## Menu 导航菜单

为页面和功能提供导航的菜单列表。

### 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

### 基础用法 

:::demo
```html
<template>
  <div>
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="mail"> <a-icon type="mail" />Navigation One </a-menu-item>
      <a-menu-item key="app" disabled> <a-icon type="appstore" />Navigation Two </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="setting" />Navigation Three - Submenu</span
        >
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">
            Option 3
          </a-menu-item>
          <a-menu-item key="setting:4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay">
        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
          >Navigation Four - Link</a
        >
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ['mail'],
    };
  },
};
</script>
```
:::

### 收起
收起后最底下部分有手风琴效果
:::demo 内嵌菜单可以被缩起/展开。
```html
<template>
  <div  class="antd-menu-demo1">
    <div class="collapsed-img-box" @click="goHome" :style="{width: `${collapsed ? '80px' : '290px'}` }"> 
      <img v-if="collapsed" src="https://oa-file-dev.bestgrand.com.cn/de0654def8414587835533583e60959c.png" />
      <img v-if='!collapsed' src="https://oa-file-dev.bestgrand.com.cn/c0c6321897074df089d737af1c5eabe4.png">
    </div>
    <a-menu
      :style="{width: `${collapsed ? '80px' : '290px'}` }"
      :default-selected-keys="['1']"
      mode="inline"
      :inline-collapsed="collapsed"
    >
      <a-menu-item key="1">
        <a-icon type="pie-chart" />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="desktop" />
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="inbox" />
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
        <a-menu-item key="5">
          Option 5
        </a-menu-item>
        <a-menu-item key="6">
          Option 6
        </a-menu-item>
        <a-menu-item key="7">
          Option 7
        </a-menu-item>
        <a-menu-item key="8">
          Option 8
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
        <a-menu-item key="9">
          Option 9
        </a-menu-item>
        <a-menu-item key="10">
          Option 10
        </a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">
            Option 11
          </a-menu-item>
          <a-menu-item key="12">
            Option 12
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
    <div class="button-box"  :style="{width: `${collapsed ? '80px' : '290px'}`, 'justify-content': `${collapsed ? 'center' : 'flex-end'}`}">
      <a-button class="antd-button" type="link"  @click="toggleCollapsed">
        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: true,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    goHome() {
      this.$message.success('成功跳转首页')
    }
  },
};
</script>
```
:::

### 完整示例

:::demo
```html
<template>
  <div class="antd-menu-demo">
    <img class="logo" @click="goHome" src="https://oa-file-dev.bestgrand.com.cn/c0c6321897074df089d737af1c5eabe4.png">
    <a-dropdown>
      <a class="ant-dropdown-link" @click="e => e.preventDefault()">
        {{currentTitle}} <a-icon type="down" />
      </a>
      <a-menu slot="overlay" @click="onClick">
        <a-menu-item key="1">
          广州分部
        </a-menu-item>
        <a-menu-item key="2">
          上海分部
        </a-menu-item>
        <a-menu-item key="3">
          易宝软件有限公司
        </a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-menu class="menu-box" v-model="current" mode="horizontal">
      <a-menu-item key="mail1">工作台 </a-menu-item>
      <a-menu-item key="app2">人事管理</a-menu-item>
      <a-menu-item key="app3">组织管理</a-menu-item>
      <a-menu-item key="app4">审批管理</a-menu-item>
    </a-menu>
    <section class="icon-box">
      <a-icon class="icon"  type="search" />
      <a-icon class="icon" type="question-circle" />
      <a-avatar src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601457082080&di=2caff6de00b0ca20bad4804ae0c6ca7f&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201411%2F01%2F20141101171342_xHRH2.jpeg" />
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentTitle: '易宝软件有限公司',
      current: ['mail1'],
    };
  },
  methods: {
    onClick({ key }) {
      switch(key) {
        case '1': 
        this.currentTitle = '广州分部'
        break;
        case '2': 
        this.currentTitle = '上海分部'
        break; 
        case '3': 
        this.currentTitle = '易宝软件有限公司'
        break;
      }
    },
    goHome() {
      this.$message.success('成功跳转首页')
    },
  }
};
</script>
```
:::