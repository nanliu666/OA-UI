## Steps步骤条
引导用户按照流程完成任务的导航条。
  
### 何时使用
当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

### 基础用法
:::demo
```html
<template>
  <a-steps :current="1">
    <a-step>
      <!-- <span slot="title">Finished</span> -->
      <template slot="title">
        Finished
      </template>
      <span slot="description">This is a description.</span>
    </a-step>
    <a-step title="In Progress" sub-title="Left 00:00:08" description="This is a description." />
    <a-step title="Waiting" description="This is a description." />
  </a-steps>
</template>
```
:::
### 带图标的步骤条 
:::demo
```html
<template>
  <a-steps>
    <a-step status="finish" title="Login">
      <a-icon slot="icon" type="user" />
    </a-step>
    <a-step status="finish" title="Verification">
      <a-icon slot="icon" type="solution" />
    </a-step>
    <a-step status="process" title="Pay">
      <a-icon slot="icon" type="loading" />
    </a-step>
    <a-step status="wait" title="Done">
      <a-icon slot="icon" type="smile-o" />
    </a-step>
  </a-steps>
</template>

```
:::

### 步骤条点击更换状态
:::demo
```html
<template>
  <div>
    <a-steps :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      {{ steps[current].content }}
    </div>
    <div class="steps-action">
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">
        Next
      </a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="$message.success('Processing complete!')"
      >
        Done
      </a-button>
      <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
        Previous
      </a-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      steps: [
        {
          title: 'First',
          content: 'First-content',
        },
        {
          title: 'Second',
          content: 'Second-content',
        },
        {
          title: 'Last',
          content: 'Last-content',
        },
      ],
    };
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
  },
};
</script>
<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
</style>
```
:::

### 步骤条错误状态
:::demo
```html
<template>
  <a-steps :current="1" status="error">
    <a-step title="Finished" description="This is a description." />
    <a-step title="In Progress" description="This is a description." />
    <a-step title="Waiting" description="This is a description." />
  </a-steps>
</template>
```
:::