## Steps步骤条
引导用户按照流程完成任务的导航条。详细文档见[Ant-Design-Vue Steps](https://antdv.com/components/steps-cn/)
  
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
