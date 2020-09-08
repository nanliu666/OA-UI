## List 列表

展示统计分析的数据。

### 何时使用

+ 当需要突出某个或某组数字时。
+ 当需要展示带描述的统计类数据时使用

### 代码演示
:::demo 
```html
<template>
    <div class="statistic-demo">
      <div class="statistic-demo-title">label超出隐藏：</div>
      <mg-statistic 
        class="statistic-instance" 
        style="width: 50px;" 
        label="活跃用户数" 
        :value="682012" 
        @click="handleClick"
      ></mg-statistic>
    </div>
    <div class="statistic-demo">
      <div class="statistic-demo-title">存在帮助icon的demo：</div>
      <mg-statistic 
          class="statistic-instance"
          label="活跃用户数" 
          :value="682012"
          labelIcon="el-icon-warning-outline"
      ></mg-statistic>
    </div>
    <div class="statistic-demo">
      <div class="statistic-demo-title">自定义tip内容的demo：</div>
      <mg-statistic class="statistic-instance"
          label="活跃用户数" 
          :value="682012" 
          labelIcon="el-icon-warning-outline" 
          tipContent="自定义说明实例"
         ></mg-statistic>
    </div>
    <div class="statistic-demo">
      <p class="statistic-demo-title">数字型格式化以及后缀的demo：</p>
      <mg-statistic 
            class="statistic-instance"
            label="简历通过率" 
            :value="54.6" 
            valueType="number" 
            valueSuffix="%"
         ></mg-statistic>
    </div>
    <div class="statistic-demo">
      <p class="statistic-demo-title">前缀带颜色demo：</p>
      <mg-statistic 
            class="statistic-instance"
            label="活跃用户数" 
            :value="682012" 
            labelIcon="el-icon-warning-outline" 
            vaulePrefix="el-icon-top" 
            color="#21A652"
         ></mg-statistic>
      <mg-statistic 
            class="statistic-instance"
            label="活跃用户数" 
            :value="682012" 
            labelIcon="el-icon-warning-outline" 
            vaulePrefix="el-icon-bottom"  
            color="#CC2328"
         ></mg-statistic>
    </div>
    <div class="statistic-demo">
      <p class="statistic-demo-title">自定义插槽的demo：</p>
      <mg-statistic 
          class="statistic-instance"
          label="反馈"
      >
        <div class="slot-style">
          <i class="el-icon-video-camera-solid"></i>
          <span>17,645</span>
        </div>
      </mg-statistic>
    </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      handleClick() {
        this.$message({
          message: '恭喜你，触发点击成功😁',
          type: 'success'
        });
      }
    }
  }
</script>
````
:::


### Attributes
| 参数        | 说明          | 类型   | 可选值                                                                         | 默认值    |
| ----------- | ------------- | ------ | ------------------------------------------------------------------------------ | --------- |
| labelIcon   | 解释icon      | string | [el-icon-warning-outline](https://element.eleme.cn/2.0/#/zh-CN/component/iocn) | -         |
| vauleType   | 值类型        | string | number（保留2位小数，小数点）/string（保留0位小数，千分位）                    | string    |
| label       | label值       | string | -                                                                              | -         |
| value       | value内容     | string | -                                                                              | -         |
| tipContent  | tooltip内容   | string | -                                                                              | 当前label |
| color       | value文字颜色 | string | -                                                                              | -         |
| vaulePrefix | value前缀图标 | string | [el-icon-top](https://element.eleme.cn/2.0/#/zh-CN/component/iocn)             | -         |
| valueSuffix | value后缀单位 | string | %                                                                              | -         |

### Methods
| 方法名称 | 说明     | 参数 |
| -------- | -------- | ---- |
| click    | 点击事件 | -    |


### Slot
| 参数    | 说明            |
| ------- | --------------- |
| default | 自定义value显示 |
