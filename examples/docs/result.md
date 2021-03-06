## Result结果
  
<!-- 详细文档见[Ant-Design-Vue Result](https://antdv.com/components/result-cn/) -->
### 何时使用
当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

### 基础用法
  
:::demo
```html
<template>
  <a-result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
  >
    <template #extra>
      <div style="color: #757C85; padding-bottom: 10px" v-if="show">{{times}}秒后自动返回</div>
      <a-button key="console" type="primary">
        Go Console
      </a-button>
      <a-button key="buy">
        Buy Again
      </a-button>
    </template>
  </a-result>
</template>
<script>
export default {
  data() {
    return {
      times: 5,
      show: true,
    };
  },
  created() {
   this.timer = setInterval(()=>{
        this.times--
        if(this.times===0){
          this.show = false
          this.$message.success('示例以提示表示成功返回，不实际返回！');
          clearInterval(this.timer)
        }
      },1000)
  },
};
</script>
```
:::

### Info 
展示处理结果。
:::demo
```html
<template>
  <a-result title="Your operation has been executed">
    <template #extra>
      <a-button key="console" type="primary">
        Go Console
      </a-button>
    </template>
  </a-result>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
```
:::

### 403
:::demo
```html
<template>
  <a-result status="403" title="403" sub-title="Sorry, you are not authorized to access this page.">
    <template #extra>
      <a-button type="primary">
        Back Home
      </a-button>
    </template>
  </a-result>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
```
:::
