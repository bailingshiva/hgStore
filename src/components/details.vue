<template>
  <div class="detail">
    <div class="detail-header">
      <in-header></in-header>
    </div>
    <div class="detail-con">
    <div class="detail-img"><img :src="goods.goods_img" /></div>
    <div class="detail-tittle">{{goods.goods_name}}</div>
    <div class="detail-desc"><p class="desc-price">优惠券金额：{{goods.goods_sale}}</p>
      <p class="desc-pa"><span>原价：{{goods.goods_price}}</span><font>销量：{{goods.goods_amount}}</font></p>
      <!--<p class="desc-np">现价：{{goods.goods_price-goods.goods_sale}}</p>-->
    </div>
    <div class="detail-btn"><router-link class="detail-quan" to="" tag="div">领取优惠券</router-link></div>
    </div>
  </div>
</template>
<script>
  import inHeader from './front_bases/header'
  export default{
    created(){
      this.getGoods()
    },
    data(){
      return{
        //goods:[]
      }
    },
    methods:{
       getGoods(){
         this.goods = this.$store.state.goods.goods
       }
    },
    components:{
      inHeader
    }
  }
</script>
<style>
  .detail-img{ width:100%;}
  .detail-img img{ width:100%}
  .detail-tittle{ height:30px; line-height: 30px; font-size: 16px; font-weight: bold; text-align: center;}
  .detail-desc{border-top:1px dashed #ddd;border-bottom:1px dashed #ddd;}
  .detail-desc p{ height:50px; line-height:50px;}
  .detail-quan{ width:60%; height:50px; line-height: 50px; margin:15px auto; border-radius: 5px; text-align: center; font-size: 18px; color: #fff; background:#de105d;}
.desc-price{  border-bottom:1px dashed #ddd;font-size:18px; color:#de105d; font-weight:bold; text-align: center; line-height:30px;}
  .desc-pa{color: #aaa; padding:0 10px;}
  .desc-pa span{ float: left; font-size: 12px; }
  .desc-pa font{ font-size:12px; float:right;}
  .desc-np{text-align: center;}

</style>
