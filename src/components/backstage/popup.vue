<template>
  <div v-if="isShow" class="popup">
    <div :style="styleObject" class="popup-box">
      <div class="popup-title"><span>标题</span><font @click="closePopup">X</font></div>
      <div class="popup-con">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      isShow: {
        type: Boolean,
        default: false
      },
      marginTop: {
        type: Number,
        default: 100
      },
      bWidth: {
        type: Number,
        default: 300
      }
    },
    data(){
      return{
        styleObject:{
          width:this.bWidth+'px',
          marginTop:this.marginTop+'px'
        }
      }
    },
    methods:{
      closePopup(){
        this.$emit('on-close')
      }
    }
  }
</script>
<style scoped>
  .popup{ position:fixed; width:100%; height:100%; left:0; top:0; background: rgba(0,0,0,0.3);}
  .popup-box{ margin:0 auto;background: #fff;box-shadow:0px 0px 5px #333333; border-radius: 5px; }
  .popup-title{ background: #f5f5f5; height:40px; border-radius: 5px 5px 0 0; }
  .popup-title span{ float: left; line-height: 40px; padding-left:10px; font-size: 16px; color:#aaa;}
  .popup-title font{ float: right; display:block; width:20px; height: 20px; text-align: center; line-height: 20px; cursor: pointer; border:1px solid #ddd; color: #ddd; font-size:16px; margin:9px 10px 0 0;}
  .popup-con{ padding:20px;}
</style>
