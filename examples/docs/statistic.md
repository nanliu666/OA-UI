## Statistic统计数值
  
<!-- 详细文档见[Ant-Design-Vue Statistic](https://antdv.com/components/statistic-cn/) -->
### 定义
展示统计分析的数据。
### 何时使用
+ 当需要突出某个或某组数字时
+ 当需要展示带描述的统计类数据时使用。

### 基础用法
  
:::demo
```html
<template>
  <div>
    <a-statistic title="Active Users" :value="112893" style="margin-right: 50px" />
    <a-statistic title="Account Balance (CNY)" :precision="2" :value="112893" />
  </div>
</template>
```
:::

### 单位
通过前缀和后缀添加单位。
:::demo
```html
<template>
  <a-row :gutter="16">
    <a-col :span="12">
      <a-statistic title="Feedback" :value="1128" style="margin-right: 50px">
        <template #suffix>
          <a-icon type="like" />
        </template>
      </a-statistic>
    </a-col>
    <a-col :span="12">
      <a-statistic title="Unmerged" :value="93" class="demo-class">
        <template #suffix>
          <span> / 100</span>
        </template>
      </a-statistic>
    </a-col>
  </a-row>
</template>
```
:::

