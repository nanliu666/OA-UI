<!--<template>-->
<!--  <div  class="anthor" :style="{paddingLeft:bounds+'px',position:affix?'fixed':'relative',top:affix?t+'px':'0px',left:affix?l+'px':'0px'}">-->
<!--    <slot></slot>-->
<!--  </div>-->
<!--</template>-->

<script>
  export default {
    name: "MgAnchor",

    props:{
      bounds:{
        type:Number,
        default: 10
      },
      affix:{
        type: Boolean,
        default: true
      }
    },
    data(){
      return {
       t:0,
        l:0,
        anthorClass:'anthor'+new Date().getTime(),
      }
    },
    watch:{
      affix:{
        handler(val){
          console.log(val)
        },
        deep:true,
        immediate:true
      }
    },
    mounted() {
      console.log(this.anthorClass)
      console.log(document.getElementsByClassName(this.anthorClass)[0])
      this.getPoint(document.getElementsByClassName(this.anthorClass)[0])
      window.addEventListener('scroll',this.handleScroll,false)
    },
    methods:{
      getPoint(obj) { //获取某元素以浏览器左上角为原点的坐标
    let t = obj.offsetTop; //获取该元素对应父容器的上边距
    let l = obj.offsetLeft; //对应父容器的上边距
    //判断是否有父容器，如果存在则累加其边距
    while (obj == obj.offsetParent) {//等效 obj = obj.offsetParent;while (obj != undefined)
      t += obj.offsetTop; //叠加父容器的上边距
      l += obj.offsetLeft; //叠加父容器的左边距
    }
        this.t= t
        this.l=l
  }
    },
    render(){
      const slotName = 'default' || 'default'
      const scopeSlotChild = this.$slots[slotName]
      let { affix ,t,l,anthorClass,bounds} = this
      console.log(affix ,t,l,anthorClass)
      console.log(new Date().getTime())

      const calssx = anthorClass +'  anthor'
      return ( <div  class= {calssx}  style={{paddingLeft:bounds+'px'}}>
             { scopeSlotChild }
        </div>
     )
    }
  }
</script>

<style lang="scss" scoped>
  .anthor{
    padding:5px;
    z-index: 9999;
    background: #fff;
    border-left: 1px solid #E3E7E9;
    min-width: 200px;
    .anthorLi{
      height: 22px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #202940;
      line-height: 22px;
      margin-bottom: 15px;
      cursor: pointer;
      a{
        color: #202940;
      }
      a:hover{
        color: #207EFA;
      }
    }
    .actives{
      color: #207EFA;
    }
    .anthorLi:last-child{
      margin-bottom:0px;
    }
  }
  body,html{
    transition: opacity 10s ease-in-out;
  }

</style>
