## Steps 步骤条
引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。

### 基础用法

简单的步骤条。

:::demo 设置`active`属性，接受一个`Number`，表明步骤的 index，从 0 开始。需要定宽的步骤条时，设置`space`属性即可，它接受`Number`，单位为`px`，如果不设置，则为自适应。设置`finish-status`属性可以改变已经完成的步骤的状态。
```html
<mg-steps :active="active" finish-status="success">
  <mg-step title="步骤 1"></mg-step>
  <mg-step title="步骤 2"></mg-step>
  <mg-step title="步骤 3"></mg-step>
</mg-steps>

<mg-button style="margin-top: 12px;" @click="next">下一步</mg-button>

<script>
  export default {
    data() {
      return {
        active: 0
      };
    },
    created() {
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
```
:::

### 复杂自定义插槽用法
所有插槽都自定义
:::demo 
```html
<div class="progress-wrap">
  <mg-steps :active="activeStep" align-center>
      <mg-step
          v-for="(item, index) in progressList"
          :key="index"
      >
          <!-- 自定义图标 -->
          <template slot="icon">
            <div class="icon-box">
                <div class="icon " :class="{'active': index + 1 <= activeStep}"/>
            </div>
          </template>
          <!-- 自定义标题 -->
          <template slot="title">
              <div class="title">
                  {{ item.status }}
              </div>
          </template>
          <!-- 自定义内容 -->
          <template slot="description">
              <div class="description-box">
                  <div>{{ item.userName }}</div>
                  <div v-if="item.approveTime">{{ item.approveTime }}</div>
                  <div v-if="item.status === '处理中'">
                    <div
                        class="isUrge"
                        @click="handelUrge(item)"
                    >
                        催一下 <i class="el-icon-bell" />
                    </div>
                  </div>
              </div>
          </template>
      </mg-step>
  </mg-steps>
  <mg-steps style="margin-top: 40px" :active="activeStep" align-center>
      <mg-step
          v-for="(item, index) in progressRejectList"
          :key="index"
          :status="item.statusCode === 'reject' ? 'error' : 'finish'"
      >
          <!-- 自定义图标 -->
          <template slot="icon">
            <div class="icon-box">
                <div class="icon " :class="{'active': index + 1 <= activeStep,  'reject-text': (index + 1 <= activeStep) && item.statusCode === 'reject'}" />
            </div>
          </template>
          <!-- 自定义标题 -->
          <template slot="title">
              <div class="title">
                  {{ item.status }}
              </div>
          </template>
          <!-- 自定义内容 -->
          <template slot="description">
              <div class="description-box">
                  <div>{{ item.userName }}</div>
                  <div v-if="item.approveTime">{{ item.approveTime }}</div>
              </div>
          </template>
      </mg-step>
  </mg-steps>
</div>
<script>
  export default {
    data() {
      return {
        activeStep: 2,
        progressList:  [
          {
            approveTime: '2020-08-28 09:30:38',
            userName: '操作人姓名',
            status: '已操作'
          },
          {
            approveTime: '',
            userName: '操作人姓名',
            status: '处理中'
          },
          {
            approveTime: '',
            userName: '',
            status: '未操作'
          },
      ],
      progressRejectList: [
        {
          approveTime: '2020-08-28 09:30:38',
          userName: '操作人姓名',
          status: '已操作'
        },
        {
          approveTime: '2020-08-30 09:30:38',
          userName: '操作人姓名',
          statusCode: 'reject',
          status: '已驳回'
        },
        {
          approveTime: '',
          userName: '',
          status: '未操作'
        },
      ]
      };
    },
  }
</script>
<style lang="scss">
  .progress-wrap {
    .el-step__icon.is-text {
      border: 0px;
    }
    .el-step__title.is-wait .title {
      color: #738399;
    }
    .el-step__title.is-process .title {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #212a3f;
    }
    .el-step__title.is-finish .title {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #212a3f;
    }
    .el-step__title.is-process {
      color: #212a3f;
      font-size: 14px;
      font-weight: 400;
    }
    .icon-box {
      position: relative;
      .tip {
        position: absolute;
        top: -30px;
        left: -20px;
      }
      .cancel-text {
        color: red;
      }
      .reject-text {
        background: red;
        color: red;
      }
      .fished-text {
        color: #368afa;
      }
    }
    // 小圆圈
    .icon {
      width: 9px;
      height: 9px;
      background: #a0a8ae;
      border-radius: 100%;
    }

    .description-box {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #738399;
    }
    // 催一下
    .isUrge {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #368afa;
      cursor: pointer;
    }
    .active {
      background: #368afa;
    }
    .cancel {
      background: red;
    }
    .reject {
      background: red;
    }
}
</style>
```
:::



### 含状态步骤条

每一步骤显示出该步骤的状态。

:::demo 也可以使用`title`具名分发，可以用`slot`的方式来取代属性的设置，在本文档最后的列表中有所有的 slot name 可供参考。
```html
<mg-steps :space="200" :active="1" finish-status="success">
  <mg-step title="已完成"></mg-step>
  <mg-step title="进行中"></mg-step>
  <mg-step title="步骤 3"></mg-step>
</mg-steps>
```
:::

### 有描述的步骤条

每个步骤有其对应的步骤状态描述。

:::demo
```html
<mg-steps :active="1">
  <mg-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></mg-step>
  <mg-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></mg-step>
  <mg-step title="步骤 3" description="这段就没那么长了"></mg-step>
</mg-steps>
```
:::

### 居中的步骤条

标题和描述都将居中。

:::demo
```html
<mg-steps :active="2" align-center>
  <mg-step title="步骤1" description="这是一段很长很长很长的描述性文字"></mg-step>
  <mg-step title="步骤2" description="这是一段很长很长很长的描述性文字"></mg-step>
  <mg-step title="步骤3" description="这是一段很长很长很长的描述性文字"></mg-step>
  <mg-step title="步骤4" description="这是一段很长很长很长的描述性文字"></mg-step>
</mg-steps>
```
:::

### 带图标的步骤条
步骤条内可以启用各种自定义的图标。

:::demo 通过`icon`属性来设置图标，图标的类型可以参考 Icon 组件的文档，除此以外，还能通过具名`slot`来使用自定义的图标。
```html

<mg-steps :active="1">
  <mg-step title="步骤 1" icon="el-icon-edit"></mg-step>
  <mg-step title="步骤 2" icon="el-icon-upload"></mg-step>
  <mg-step title="步骤 3" icon="el-icon-picture"></mg-step>
</mg-steps>
```
:::

### 竖式步骤条

竖直方向的步骤条。

:::demo 只需要在`mg-steps`元素中设置`direction`属性为`vertical`即可。
```html
<div style="height: 300px;">
  <mg-steps direction="vertical" :active="1">
    <mg-step title="步骤 1"></mg-step>
    <mg-step title="步骤 2"></mg-step>
    <mg-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></mg-step>
  </mg-steps>
</div>
```
:::

### 简洁风格的步骤条
设置 `simple` 可应用简洁风格，该条件下 `align-center` / `description` / `direction` / `space` 都将失效。

:::demo
```html

<mg-steps :active="1" simple>
  <mg-step title="步骤 1" icon="el-icon-edit"></mg-step>
  <mg-step title="步骤 2" icon="el-icon-upload"></mg-step>
  <mg-step title="步骤 3" icon="el-icon-picture"></mg-step>
</mg-steps>

<mg-steps :active="1" finish-status="success" simple style="margin-top: 20px">
  <mg-step title="步骤 1" ></mg-step>
  <mg-step title="步骤 2" ></mg-step>
  <mg-step title="步骤 3" ></mg-step>
</mg-steps>
```
:::

### Steps Attributes

| 参数           | 说明                                               | 类型            | 可选值                                    | 默认值     |
| -------------- | -------------------------------------------------- | --------------- | ----------------------------------------- | ---------- |
| space          | 每个 step 的间距，不填写将自适应间距。支持百分比。 | number / string | —                                         | —          |
| direction      | 显示方向                                           | string          | vertical/horizontal                       | horizontal |
| active         | 设置当前激活步骤                                   | number          | —                                         | 0          |
| process-status | 设置当前步骤的状态                                 | string          | wait / process / finish / error / success | process    |
| finish-status  | 设置结束步骤的状态                                 | string          | wait / process / finish / error / success | finish     |
| align-center   | 进行居中对齐                                       | boolean         | -                                         | false      |
| simple         | 是否应用简洁风格                                   | boolean         | -                                         | false      |

### Step Attributes
| 参数        | 说明                                            | 类型                                                       | 可选值 | 默认值 |
| ----------- | ----------------------------------------------- | ---------------------------------------------------------- | ------ | ------ |
| title       | 标题                                            | string                                                     | —      | —      |
| description | 描述性文字                                      | string                                                     | —      | —      |
| icon        | 图标                                            | 传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入 | string | —      |
| status      | 设置当前步骤的状态，不设置则根据 steps 确定状态 | wait / process / finish / error / success                  | -      |

### Step Slot
| name        | 说明             |
| ----------- | ---------------- |
| icon        | 自定义图标       |
| title       | 自定义标题       |
| description | 自定义描述性文字 |
