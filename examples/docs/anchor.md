# Anchor 描点

### 基础用法
最基础用法 
:::demo
```html
<template>
    <div style="height: 150px;position: relative">
     <div id="top1">
       top1
     </div>
      <mg-anchor >
          <mg-anchor-link href="#top1" title="标签1"></mg-anchor-link>
          <mg-anchor-link href="#top2" title="标签2"></mg-anchor-link>
          <mg-anchor-link href="#top3" title="标签3"></mg-anchor-link>
          <mg-anchor-link href="#top4" title="标签4"></mg-anchor-link>
      </mg-anchor>
    </div>

</template>
<script>
export default {
  data() {
    return {
    }
  },
 mounted(){
        window.addEventListener('scroll',this.handleScroll)
},
methods:{
handleScroll(){
}
}
}
</script>
```
:::
### affix
静态位置 affix
:::demo
```html
<template>
<div id="top2">
   top2
 </div>
  <mg-anchor :affix='false'>
       <mg-anchor-link href="#top1" title="标签1"></mg-anchor-link>
        <mg-anchor-link href="#top2" title="标签2"></mg-anchor-link>
        <mg-anchor-link href="#top3" title="标签3"></mg-anchor-link>
        <mg-anchor-link href="#top4" title="标签4"></mg-anchor-link>
</mg-anchor>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>
```
:::
:::demo
```html
<template>
<div id="top3">
   top3
 </div>
    <mg-anchor >
            <mg-anchor-link href="#top1" title="标签1"></mg-anchor-link>
            <mg-anchor-link href="#top2" title="标签2"></mg-anchor-link>
            <mg-anchor-link href="#top3" title="标签3"></mg-anchor-link>
            <mg-anchor-link href="#top4" title="标签4"></mg-anchor-link>
        </mg-anchor>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>
```
:::
:::demo
```html
<template>
 <div id="top4">
   top4
 </div>
  <mg-anchor >
          <mg-anchor-link href="#top1" title="标签1"></mg-anchor-link>
          <mg-anchor-link href="#top2" title="标签2"></mg-anchor-link>
          <mg-anchor-link href="#top3" title="标签3"></mg-anchor-link>
          <mg-anchor-link href="#top4" title="标签4"></mg-anchor-link>
      </mg-anchor>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>
```
:::



### Attributes

| 参数     | 说明                                                               | 类型          | 可选值                                     | 默认值 |
| -------- | ------------------------------------------------------------------ | ------------- | ------------------------------------------ | ------ |
| href      | 锚点链接                                                 | string        |                                            |        |
| title     | 文字内容                                         |        string        |                                            |        |
