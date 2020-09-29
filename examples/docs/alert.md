## Message 信息提示
  
<!-- 详细文档见[Ant-Design-Vue Alert](https://antdv.com/components/alert-cn/) -->
### 何时使用

+ 当某个页面需要向用户显示警告的信息时。
+ 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。
  
### 基本
最简单的用法，适用于简短的警告提示。
  
:::demo
```html
<template>
  <a-alert message="Success Text" type="success" />
</template>
```
:::
### 含描述、关闭以及多种图标的信息提示
若需要对问题进一步地阐述或引导用户完成操作时，可配置描述对消息进行辅助性文字介绍
  
:::demo
```html
<template>
  <div>
    自定义关闭
    <a-alert class="antd-alert" message="Info Text" type="info" close-text="操作按钮" />
    含操作按钮的信息提示
    <a-alert class="antd-alert" type="info" closable>
      <div slot="message">这是一段提示文案 <a-radio-button value="large">
        操作按钮
      </a-radio-button></div>
    </a-alert>
    存在描述信息
      <a-alert
      class="antd-alert"
      message="Error Text"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      type="error"
      closable
    />
    成功
    <a-alert class="antd-alert" message="Success Tips" type="success" show-icon />
    信息
    <a-alert class="antd-alert" message="Informational Notes" type="info" show-icon />
    警告
    <a-alert class="antd-alert" message="Warning" type="warning" show-icon />
    错误
    <a-alert class="antd-alert" message="Error" type="error" show-icon />
    <a-alert
      message="Success Tips"
       class="antd-alert"
      description="Detailed description and advices about successful copywriting."
      type="success"
      show-icon
    />
    <a-alert
      message="Informational Notes"
      class="antd-alert"
      description="Additional description and informations about copywriting."
      type="info"
      show-icon
    />
    <a-alert
      message="Warning"
      description="This is a warning notice about copywriting."
      class="antd-alert"
      type="warning"
      show-icon
    />
    <a-alert
      message="Error"
      description="This is an error message about copywriting."
      class="antd-alert"
      type="error"
      show-icon
    />
  </div>
</template>
```
:::
### 顶部公告
页面顶部通告形式，默认有图标且type 为 'warning'
  
:::demo
```html
<template>
  <div>
    <a-alert message="Warning text" banner />
    <br />
    <a-alert
      message="Very long warning text warning text text text text text text text"
      banner
      closable
    />
    <br />
    <a-alert :show-icon="false" message="Warning text without icon" banner />
    <br />
    <a-alert type="error" message="Error text" banner />
  </div>
</template>
```
:::

