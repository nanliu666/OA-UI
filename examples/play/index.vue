<template>
  <div style="margin: 20px;">
    <mg-input
      v-model="input1"
      placeholder="请输入内容"
      :status-type="inputStatusType"
      :disabled="true"
    />
    <mg-anchor
      :anchor-links="anchorLinks"
    >
      <ul class="anchor-demo-ul">
        <li
          v-for="(item, index) in anchorLinks"
          :key="index"
        >
          <h2 :id="item.href">
            <a
              class="anchor"
            >
              <i class="el-icon-link" />
            </a>
            {{ item.label }}
          </h2>
          <div
            class="anchor-demo-box"
            :class="'demo-' + index"
          />
        </li>
      </ul>
    </mg-anchor>
    <!-- <div style="height: 600px; width: 400px" /> -->
  </div>
</template>

<script>
// import mgInput from '../'
// import child from '../components/child.vue';
export default {
  data() {
    return {
      input: 'Hello Word!',
      input1: 'Hello',
      value: 'Hello',
      inputStatusType: 'error',
      anchorLinks: [
        {
          href: 'href1',
          label: '标签1'
        },
        {
          href: 'href2',
          label: '标签2'
        },
        {
          href: 'href3',
          label: '标签3'
        },
        {
          href: 'href4',
          label: '标签4'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
ul,
li {
  padding: 0;
  margin: 0;
  list-style-type: none;
  box-sizing: border-box;
}
.anchor-demo-ul {
  h2 {
    font-size: 35px;
    line-height: 1.2;
    &::before {
      content: ' ';
      display: block;
      border-bottom: 1px solid #ececec;
      padding-top: 44px;
      margin-bottom: 40px;
    }
    .anchor {
      float: left;
      padding-right: 4px;
      margin-left: -20px;
    }
  }
  .anchor-demo-box {
    width: 100%;
    height: 500px;
    margin: 10px 0;
    color: #fff;
  }

  .demo-0 {
    background-color: #207efa;
  }
  .demo-1 {
    background-color: #d56779;
  }
  .demo-2 {
    background-color: #5bc077;
  }
  .demo-3 {
    background-color: #dbc226;
  }
}
</style>
