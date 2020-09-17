# 输入框

:::demo
```html
<a-input v-model="text"/>
<script>
export default {
  data(){
    return {text:''}
  }
}

</script>
```
:::

:::demo
```html
<a-button type="primary" @click="handleClick">
  Primary
</a-button>
<script>
export default {
  data(){
    return {text:''}
  },
  methods:{
    handleClick(){
      console.log('click')
    }
  }
}

</script>
```
:::