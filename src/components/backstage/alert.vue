<template>
  <div v-if="is_ashow" class="alert">
    <div class="alert-box">
      <div class="alert-title"><span>提示</span><font @click="closeAlert">X</font></div>
      <div class="alert-con">
        <div class="alert-word">
          <slot></slot>
        </div>

        <div @click="closeAlert" class="alert-btn">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      is_ashow: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeAlert(){
          this.$emit('on-close');
      }
    }
  }
</script>
<style>
  .alert{ position:fixed; width:100%; height:100%; left:0; top:0; }
  .alert-box{margin:0 auto;background: #fff; width:300px; margin-top:200px;box-shadow:0px 0px 10px rgba(0,0,0,0.3); border-radius: 5px; }
  .alert-title{ height:30px; background: #f5f5f5; border-radius: 5px 5px 0 0; }
  .alert-title span{ float: left; line-height: 30px; padding-left:10px; font-size: 16px; color:#aaa;}
  .alert-title font{ float: right; display:block; width:20px; height: 20px; text-align: center; line-height: 20px; cursor: pointer; border:1px solid #ddd; color: #ddd; font-size:16px; margin:4px 10px 0 0;}
  .alert-con{ padding:20px;}
  .alert-word{ padding-bottom:20px; font-size: 14px; text-align: center}
  .alert-btn{ width:60px; height:30px; background:#de105d; color:#fff; margin:0 auto; cursor: pointer; text-align: center; line-height: 30px; border-radius: 5px;}
</style>
