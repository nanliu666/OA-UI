## Descriptions描述
  
<!-- 详细文档见[Ant-Design-Vue Descriptions](https://antdv.com/components/descriptions-cn/) -->
### 何时使用
常见于详情页的信息展示。

### 基础用法
  
:::demo
```html
<template>
  <a-descriptions title="User Info">
    <a-descriptions-item label="UserName">
      Zhou Maomao
    </a-descriptions-item>
    <a-descriptions-item label="Telephone">
      1810000000
    </a-descriptions-item>
    <a-descriptions-item label="Live">
      Hangzhou, Zhejiang
    </a-descriptions-item>
    <a-descriptions-item label="Remark">
      empty
    </a-descriptions-item>
    <a-descriptions-item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </a-descriptions-item>
  </a-descriptions>
</template>
```
:::

### 带边框的 

:::demo
```html
<template>
  <a-descriptions title="User Info" bordered>
    <a-descriptions-item label="Product">
      Cloud Database
    </a-descriptions-item>
    <a-descriptions-item label="Billing Mode">
      Prepaid
    </a-descriptions-item>
    <a-descriptions-item label="Automatic Renewal">
      YES
    </a-descriptions-item>
    <a-descriptions-item label="Order time">
      2018-04-24 18:00:00
    </a-descriptions-item>
    <a-descriptions-item label="Usage Time" :span="2">
      2019-04-24 18:00:00
    </a-descriptions-item>
    <a-descriptions-item label="Status" :span="3">
      <a-badge status="processing" text="Running" />
    </a-descriptions-item>
    <a-descriptions-item label="Negotiated Amount">
      $80.00
    </a-descriptions-item>
    <a-descriptions-item label="Discount">
      $20.00
    </a-descriptions-item>
    <a-descriptions-item label="Official Receipts">
      $60.00
    </a-descriptions-item>
    <a-descriptions-item label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1<br />
    </a-descriptions-item>
  </a-descriptions>
</template>
```
:::

