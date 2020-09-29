## DatePicker日期选择框
输入或选择日期的控件。
  
### 何时使用
当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

### 基础用法
  
:::demo
```html
<template>
  <div>
    <a-date-picker @change="onChange" />
    <br />
    <a-month-picker placeholder="Select month" @change="onChange" />
    <br />
    <a-range-picker @change="onChange" />
    <br />
    <a-week-picker placeholder="Select week" @change="onChange" />
  </div>
</template>
<script>
export default {
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  },
};
</script>

```
:::

### 禁用状态
:::demo
```html
<template>
  <div>
    <a-date-picker :default-value="dateFormat(new Date())" disabled />
    <br />
    <a-month-picker :default-value="dateFormat(new Date())" disabled />
    <br />
    <a-range-picker
      :default-value="[dateFormat(new Date()), dateFormat(new Date())]"
      disabled
    />
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
  },
};
</script>
```
:::

### 日历面板禁止选取
:::demo
```html
<template>
  <a-date-picker
      format="YYYY-MM-DD HH:mm:ss"
      :disabled-date="disabledDate"
      :disabled-time="disabledDateTime"
      :show-time="{ defaultValue: new Date() }"
    />
</template>
<script>
  export default {
    methods: {
      disabledDate(current) {
      return current && current < new Date()
      },
      disabledDateTime() {
        return {
          disabledHours: () => this.range(0, 24).splice(4, 20),
          disabledMinutes: () => this.range(30, 60),
          disabledSeconds: () => [55, 56],
        };
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
    }
  }
</script>
```
:::

