## Comment评论
  
<!-- 详细文档见[Ant-Design-Vue Comment](https://antdv.com/components/comment-cn/) -->
### 定义
对网站内容的反馈、评价和讨论
### 何时使用
当需要对事物进行讨论或发表评价时，例如页面、文章、问题等

### 基础用法
  一个基本的评论组件，带有作者、头像、时间和操作。
:::demo
```html
<template>
  <a-comment>
    <template slot="actions">
      <span key="comment-basic-like">
        <a-tooltip title="Like">
          <a-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like" />
        </a-tooltip>
        <span style="padding-left: '8px';cursor: 'auto'">
          {{ likes }}
        </span>
      </span>
      <span key="comment-basic-dislike">
        <a-tooltip title="Dislike">
          <a-icon
            type="dislike"
            :theme="action === 'disliked' ? 'filled' : 'outlined'"
            @click="dislike"
          />
        </a-tooltip>
        <span style="padding-left: '8px';cursor: 'auto'">
          {{ dislikes }}
        </span>
      </span>
      <span key="comment-basic-reply-to">Reply to</span>
    </template>
    <a slot="author">Han Solo</a>
    <a-avatar
      slot="avatar"
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      alt="Han Solo"
    />
    <p slot="content">
      We supply a series of design principles, practical patterns and high quality design resources
      (Sketch and Axure), to help people create their product prototypes beautifully and
      efficiently.
    </p>
    <a-tooltip slot="datetime" :title="dateFormat(new Date())">
      <span>{{ dateFormat(new Date()) }}</span>
    </a-tooltip>
  </a-comment>
</template>
<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
      action: null,
    };
  },
  methods: {
    like() {
      this.likes = 1;
      this.dislikes = 0;
      this.action = 'liked';
    },
    dislike() {
      this.likes = 0;
      this.dislikes = 1;
      this.action = 'disliked';
    },
    dateFormat(date, format) {
      format = format || 'yyyy-MM-dd hh:mm:ss'
      if (date !== 'Invalid Date') {
        let o = {
          'M+': date.getMonth() + 1, //month
          'd+': date.getDate(), //day
          'h+': date.getHours(), //hour
          'm+': date.getMinutes(), //minute
          's+': date.getSeconds(), //second
          'q+': Math.floor((date.getMonth() + 3) / 3), //quarter
          S: date.getMilliseconds() //millisecond
        }
        if (/(y+)/.test(format))
          format = format.replace(
            RegExp.$1,
            (date.getFullYear() + '').substr(4 - RegExp.$1.length)
          )
        for (let k in o)
          if (new RegExp('(' + k + ')').test(format))
            format = format.replace(
              RegExp.$1,
              RegExp.$1.length === 1
                ? o[k]
                : ('00' + o[k]).substr(('' + o[k]).length)
            )
        return format
      }
      return ''
    }
  },
};
</script>
```
:::

### 配合 List 组件
  配合 List 组件展现评论列表。
:::demo
```html
<template>
  <a-list
    class="comment-list"
    :header="`${data.length} replies`"
    item-layout="horizontal"
    :data-source="data"
  >
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-comment :author="item.author" :avatar="item.avatar">
        <template slot="actions">
          <span v-for="action in item.actions">{{ action }}</span>
        </template>
        <p slot="content">
          {{ item.content }}
        </p>
        <a-tooltip slot="datetime" :title="dateFormat(item.datetime)">
          <span>{{ dateFormat(item.datetime) }}</span>
        </a-tooltip>
      </a-comment>
    </a-list-item>
  </a-list>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: new Date(),
        },
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: new Date(),
        },
      ],
    };
  },
  methods: {
     dateFormat(date, format) {
      format = format || 'yyyy-MM-dd hh:mm:ss'
      if (date !== 'Invalid Date') {
        let o = {
          'M+': date.getMonth() + 1, //month
          'd+': date.getDate(), //day
          'h+': date.getHours(), //hour
          'm+': date.getMinutes(), //minute
          's+': date.getSeconds(), //second
          'q+': Math.floor((date.getMonth() + 3) / 3), //quarter
          S: date.getMilliseconds() //millisecond
        }
        if (/(y+)/.test(format))
          format = format.replace(
            RegExp.$1,
            (date.getFullYear() + '').substr(4 - RegExp.$1.length)
          )
        for (let k in o)
          if (new RegExp('(' + k + ')').test(format))
            format = format.replace(
              RegExp.$1,
              RegExp.$1.length === 1
                ? o[k]
                : ('00' + o[k]).substr(('' + o[k]).length)
            )
        return format
      }
      return ''
    }
  }
};
</script>
```
:::
