## Drawer抽屉
  
<!-- 详细文档见[Ant-Design-Vue Drawer](https://antdv.com/components/drawer-cn/) -->
### 定义
屏幕边缘滑出的浮层面板
### 何时使用
抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。

+ 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
+ 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。

### 通用规则
+ 抽屉从右侧滑入并且固定，通常跨过屏幕的高度
+ 是用户主动触发的，不可自动弹出
+ 当抽屉内容过多时，可以在抽屉的内容区添加垂直滚动条
### 查看类抽屉
1. 点击抽屉左侧空白处关闭抽屉
2. 点击操作类按钮或链接，抽屉关闭的同时执行操作
3. 切换时先关闭当前的抽屉，再打开新的抽屉。
:::demo
```html
<template>
  <div>
    <a-button type="primary" @click="showDrawer(1)">标题一</a-button>
    <a-button type="primary" @click="showDrawer(2)">标题二</a-button>
    <a-drawer
      :title="drawerTitle"
      placement="right"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      drawerTitle: ''
    };
  },
  methods: {
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showDrawer(index) {
      this.visible = true;
      switch(index) {
        case 1:
           this.drawerTitle = '切换一'
        break;
        case 2:
           this.drawerTitle = '切换二'
        break;
      }
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>
```
:::
### 操作类抽屉行为
+ 点击表单底部「保存」，保存数据并退出抽屉
+ 当抽屉页面数据改变未保存时
1. 点击蒙层
2. 点击关闭
+ 点击表单底部取消，不保存页面内容并退出抽屉
:::demo
```html
<template>
  <div>
    <a-button type="primary" @click="showDrawer"> <a-icon type="plus" /> New account </a-button>
    <a-drawer
      title="Create a new account"
      :width="720"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <a-form :form="form" layout="vertical" hide-required-mark>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Name">
              <a-input
                v-decorator="[
                  'name',
                  {
                    rules: [{ required: true, message: 'Please enter user name' }],
                  },
                ]"
                placeholder="Please enter user name"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Url">
              <a-input
                v-decorator="[
                  'url',
                  {
                    rules: [{ required: true, message: 'please enter url' }],
                  },
                ]"
                style="width: 100%"
                addon-before="http://"
                addon-after=".com"
                placeholder="please enter url"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Owner">
              <a-select
                v-decorator="[
                  'owner',
                  {
                    rules: [{ required: true, message: 'Please select an owner' }],
                  },
                ]"
                placeholder="Please a-s an owner"
              >
                <a-select-option value="xiao">
                  Xiaoxiao Fu
                </a-select-option>
                <a-select-option value="mao">
                  Maomao Zhou
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Type">
              <a-select
                v-decorator="[
                  'type',
                  {
                    rules: [{ required: true, message: 'Please choose the type' }],
                  },
                ]"
                placeholder="Please choose the type"
              >
                <a-select-option value="private">
                  Private
                </a-select-option>
                <a-select-option value="public">
                  Public
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Approver">
              <a-select
                v-decorator="[
                  'approver',
                  {
                    rules: [{ required: true, message: 'Please choose the approver' }],
                  },
                ]"
                placeholder="Please choose the approver"
              >
                <a-select-option value="jack">
                  Jack Ma
                </a-select-option>
                <a-select-option value="tom">
                  Tom Liu
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="DateTime">
              <a-date-picker
                v-decorator="[
                  'dateTime',
                  {
                    rules: [{ required: true, message: 'Please choose the dateTime' }],
                  },
                ]"
                style="width: 100%"
                :get-popup-container="trigger => trigger.parentNode"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item label="Description">
              <a-textarea
                v-decorator="[
                  'description',
                  {
                    rules: [{ required: true, message: 'Please enter url description' }],
                  },
                ]"
                :rows="4"
                placeholder="please enter url description"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <a-button :style="{ marginRight: '8px' }" type="primary" @click="onClose">
          保存
        </a-button>
        <a-button @click="onClose">
          取消
        </a-button>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      visible: false,
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>
```
:::
### 自定义位置
:::demo
```html
<template>
  <div>
    <a-radio-group style="margin-right: 8px" :default-value="placement" @change="onChange">
      <a-radio value="top">
        top
      </a-radio>
      <a-radio value="right">
        right
      </a-radio>
      <a-radio value="bottom">
        bottom
      </a-radio>
      <a-radio value="left">
        left
      </a-radio>
    </a-radio-group>
    <a-button type="primary" @click="showDrawer">
      Open
    </a-button>
    <a-drawer
      title="Basic Drawer"
      :placement="placement"
      :closable="false"
      :visible="visible"
      @close="onClose"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      placement: 'left',
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    onChange(e) {
      this.placement = e.target.value;
    },
  },
};
</script>
```
:::

