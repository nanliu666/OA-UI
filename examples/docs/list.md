## List 列表

通用列表。

### 何时使用

最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。

### 代码演示
#### 基础列表
:::demo 
```html
<template>
  <mg-list bordered :data-source="dataSource" >
    <template slot-scope="{ item, index }"  slot="renderItem">
        <div class="mg-li-style">
           <mg-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
           <div class="desc-box">
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
           </div>
        </div>
    </template>
    <div slot='header'>header</div>
    <div slot='footer'>footer</div>
  </mg-list>
</template>
<script>
  const dataSource = [
    {
      title: 'mage-ui-list-demo 1',
      desc: '这是我们的mage的list展示的描述这是我们的mage的list展示的描述这是我们的mage的list展示的描述这是我们的mage的list展示的描述',
    },
    {
      title: 'mage-ui-list-demo 2',
      desc: '这是我们的mage的list展示的描述',
    },
    {
      title: 'mage-ui-list-demo 3',
      desc: '这是我们的mage的list展示的描述',
    },
    {
      title: 'mage-ui-list-demo 4',
      desc: '这是我们的mage的list展示的描述',
    },
  ];
  export default {
    data() {
      return {
        dataSource
      }
    },
  }
</script>
<style lang="scss">
  .mg-li-style {
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    .desc-box {
      width: calc(100% - 40px);
      padding-left: 20px;
      .title {
        color: rgb(0, 0, 0);
        font-size: 16px;
        margin-bottom: 4px;
        &:hover {
          color: #409eff;
        }
      }
      .desc {
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>
````
:::

#### 响应式的栅格列表
:::demo 
```html
<template>
  <mg-list  :data-source="dataSource" :grid="{ gutter: 16, xs: 24, sm: 24, md: 12, lg: 6, xl: 6}">
    <template slot-scope="{ item, index }"  slot="renderItem">
      <mg-card>
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
        </div>
        {{item.title}}
      </mg-card>
    </template>
  </mg-list>
</template>
<script>
  const dataSource = [
    {
      title: 'list-demo 1',
    },
    {
      title: 'list-demo 2',
    },
    {
      title: 'list-demo 3',
    },
    {
      title: 'list-demo 4',
    },
  ];
  export default {
    data() {
      return {
        dataSource
      }
    },
  }
</script>
````
:::



#### 分页模式

:::demo 
```html
<template>
  <mg-list
    :data-source="dataSource" 
  >
    <template slot-scope="{ item, index }"  slot="renderItem">
        <div class="mg-li-style pagination-demo">
           <mg-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
           <div class="desc-box">
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
           </div>
            <img
              class="pagination-img"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
        </div>
    </template>
    <div slot="footer">
      <mg-pagination
        class="pagination-demo1"
        background
        layout="prev, pager, next"
        :total="100">
      </mg-pagination>
    </div>
  </mg-list>
</template>
<script>
  const dataSource = [
    {
      title: 'mage-ui-list-demo 1',
      desc: '这是我们的mage的list展示的描述这是我们的mage的list展示的描述这是我们的mage的list展示的描述这是我们的mage的list展示的描述',
    },
    {
      title: 'mage-ui-list-demo 2',
      desc: '这是我们的mage的list展示的描述',
    },
    {
      title: 'mage-ui-list-demo 3',
      desc: '这是我们的mage的list展示的描述',
    },
    {
      title: 'mage-ui-list-demo 4',
      desc: '这是我们的mage的list展示的描述',
    },
  ];
  export default {
    data() {
      return {
        dataSource: dataSource
      }
    },
    mounted() {

    },
    methods: {

    },
  }
</script>
<style lang="scss">
  .mg-li-style {
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    .desc-box {
      width: calc(100% - 40px);
      padding-left: 20px;
      .title {
        color: rgb(0, 0, 0);
        font-size: 16px;
        margin-bottom: 4px;
        &:hover {
          color: #409eff;
        }
      }
      .desc {
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .pagination-demo {
    align-items: center;
    justify-content: space-between;
    .desc-box {
      width: calc(100% - 50px - 282px);
    }

    .pagination-img {
      width: 272px; 
    }
  }
  .pagination-demo1 {
    display: flex;
    justify-content: flex-end;
  }
</style>
````
:::

#### 加载更多（无边框列表）

:::demo 
```html
<template>
  <mg-list
    :loading="loading"
    :data-source="dataSource" 
  >
    <div
      v-if="showLoadingMore"
      slot="loadMore"
      :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
    >
      <i v-if="loadingMore" class="el-icon-loading" />
      <mg-button v-else @click="onLoadMore">
        loading more
      </mg-button>
    </div>
    <template slot-scope="{ item, index }"  slot="renderItem">
        <div class="mg-li-style">
           <mg-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
           <div class="desc-box">
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
           </div>
        </div>
    </template>
  </mg-list>
</template>
<script>
  const dataSource = [
    {
      title: 'mage-ui-list-demo 1',
      desc: '这是我们的mage的list展示的描述这是我们的mage的list展示的描述这是我们的mage的list展示的描述这是我们的mage的list展示的描述',
    },
    {
      title: 'mage-ui-list-demo 2',
      desc: '这是我们的mage的list展示的描述',
    },
    {
      title: 'mage-ui-list-demo 3',
      desc: '这是我们的mage的list展示的描述',
    },
    {
      title: 'mage-ui-list-demo 4',
      desc: '这是我们的mage的list展示的描述',
    },
  ];
  export default {
    data() {
      return {
        loading: true,
        loadingMore: false,
        showLoadingMore: true,
        dataSource: []
      }
    },
    mounted() {
      this.getData(() => {
        this.loading = false;
        this.dataSource = dataSource;
      });
    },
    methods: {
      getData(callback) {
        setTimeout(() => {
          callback(dataSource);
        },1000)
      },
      onLoadMore() {
        this.loadingMore = true;
        this.getData(() => {
          this.dataSource = this.dataSource.concat(dataSource);
          this.loadingMore = false;
        });
      },
    },
  }
</script>
<style lang="scss">
  .mg-li-style {
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    .desc-box {
      width: calc(100% - 40px);
      padding-left: 20px;
      .title {
        color: rgb(0, 0, 0);
        font-size: 16px;
        margin-bottom: 4px;
        &:hover {
          color: #409eff;
        }
      }
      .desc {
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>
````
:::

#### 滚动加载无限长列表
更多信息请查询**InfiniteScroll 无限滚动[element 示例](https://element.eleme.cn/#/zh-CN/component/infiniteScroll)**
:::demo 
```html
<template>
  <mg-list
    style="overflow:auto"
    v-infinite-scroll="onLoadMore" 
    :infinite-scroll-distance="10"
    :data-source="dataSource" 
  >
    <template slot-scope="{ item, index }"  slot="renderItem">
        <div class="mg-li-style">
           <mg-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
           <div class="desc-box">
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
           </div>
        </div>
    </template>
    <div
      v-if="showLoadingMore"
      slot="loadMore" 
      :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
      <i class="el-icon-loading" />
    </div>
    <p
      :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
      slot="loadMore" 
      v-if="!showLoadingMore"
      >没有更多了</p>
  </mg-list>
</template>
<script>
  const dataSource = [
    {
      title: 'mage-ui-list-demo 1',
      desc: '这是我们的mage的list展示的描述这是我们的mage的list展示的描述这是我们的mage的list展示的描述这是我们的mage的list展示的描述',
    },
    {
      title: 'mage-ui-list-demo 2',
      desc: '这是我们的mage的list展示的描述',
    },
    {
      title: 'mage-ui-list-demo 3',
      desc: '这是我们的mage的list展示的描述',
    },
    {
      title: 'mage-ui-list-demo 4',
      desc: '这是我们的mage的list展示的描述',
    },
  ];
  export default {
    data() {
      return {
        count: 1,
        showLoadingMore: true,
        dataSource: []
      }
    },
    mounted() {
      this.getData(() => {
        this.loading = false;
        this.dataSource = dataSource;
      });
    },
    methods: {
      getData(callback) {
        setTimeout(() => {
          if(this.count > 10) {
            this.showLoadingMore = false
          } else {
            callback(dataSource);
          }
        },2000)
      },
      onLoadMore() {
        this.count ++ 
        this.getData(() => {
          this.dataSource = this.dataSource.concat(dataSource);
          this.loadingMore = false;
        });
      },
    },
  }
</script>
<style lang="scss">
  .mg-li-style {
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    .desc-box {
      width: calc(100% - 40px);
      padding-left: 20px;
      .title {
        color: rgb(0, 0, 0);
        font-size: 16px;
        margin-bottom: 4px;
        &:hover {
          color: #409eff;
        }
      }
      .desc {
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>
````
:::


#### 尺寸变化
:::demo 
```html
<template>
 <div style="padding-bottom: 10px">default Size(padding: 12px 24px)</div>
  <mg-list bordered :data-source="dataSource" >
    <template slot-scope="{ item, index }"  slot="renderItem">
      {{item}}
    </template>
    <div slot='header'>header</div>
    <div slot='footer'>footer</div>
  </mg-list>
</template>
<template>
 <div style="padding: 20px 0 10px">large Size( padiing: 16px 24px)</div>
  <mg-list size="large" bordered :data-source="dataSource" >
    <template slot-scope="{ item, index }"  slot="renderItem">
      {{item}}
    </template>
    <div slot='header'>header</div>
    <div slot='footer'>footer</div>
  </mg-list>
</template>
<template>
 <div style="padding: 20px 0 10px">small Size(padding: 8px 16px)</div>
  <mg-list size="small" bordered :data-source="dataSource" >
    <template slot-scope="{ item, index }"  slot="renderItem">
      {{item}}
    </template>
    <div slot='header'>header</div>
    <div slot='footer'>footer</div>
  </mg-list>
</template>
<script>
  const dataSource = [
    '这是我们的mage的list展示的描述',
    '这是我们的mage的list展示的描述',
    '这是我们的mage的list展示的描述',
    '这是我们的mage的list展示的描述',
    '这是我们的mage的list展示的描述',
  ];
  export default {
    data() {
      return {
        dataSource
      }
    },
  }
</script>
````
:::



### Attributes
| 参数       | 说明           | 类型    | 可选值             | 默认值 |
| ---------- | -------------- | ------- | ------------------ | ------ |
| dataSource | 数据源         | any[]   | —                  | —      |
| size       | 列表间距规格   | string  | small/middle/large | middle |
| bordered   | 是否展示边框   | boolean | -                  | false  |
| split      | 是否展示分割线 | boolean | -                  | true   |


### Slot
| 参数       | 说明                                                                              |
| ---------- | --------------------------------------------------------------------------------- |
| header     | 当前列表头部插槽                                                                  |
| footer     | 当前列表底部插槽                                                                  |
| renderItem | 当前列表主体插槽(请使用slot="renderItem" 和 slot-scope="{ item, index }"配套使用) |
| loadMore   | 加载更多的按钮插槽                                                                |
