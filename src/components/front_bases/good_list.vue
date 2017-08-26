<template>
  <div class="goods">
    <scroll ref="scroll" class="goods-con" :data="goods">
      <div class="goods-list">
        <div v-for="item in goods" @click="skipDetail(item)" class="content-products-item">
          <div class="products-left"><a href="javascript:void(0)" class="content-products-img"><img
            :src="item.goods_img"/><span>{{item.goods_sale}}</span></a></div>
          <div class="products-right">
            <a href="javascript:void(0)" class="content-products-name">{{item.goods_name}}</a>
            <div class="content-products-price clearfix">
              <span>券后价 <b>￥{{item.goods_price - item.goods_sale}}</b> </span><font
            >在售价 ￥{{item.goods_price}}</font></div>
            <div class="content-products-sale clearfix"><span>销量 <font>{{item.goods_amount}}</font></span><i
              :class="['goods-ref-' + item.goods_ref]"></i></div>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import Scroll from './scroll'
export default{
  props: {
    goods: {
      type: Array,
      default: []
    }
  },
  components: {
    Scroll
  },
  methods:{
    skipDetail(item){
     this.$store.commit('SET_CURGOODS',item)
      this.$router.push({
        path: `/detail`
      })
    }
  }
}
</script>
<style>
  .goods{position:absolute;width: 100%;top: 0px; bottom: 0}
  .goods-con{overflow: hidden;height: 100%;}
  .goods-list{ background: #ddd; margin-top:5px; padding:5px 0;}
  .products-left{ width:120px; position: absolute; top: 0; left: 0;}
  .content-products-item{height:100px; background: #fff;position: relative; overflow: hidden; width:100%; margin: 5px 0;}
  .content-products-img{ display:block; width:100%; height:100px; position:relative;}
  .content-products-img img{ width:100%;}
  .content-products-img span{ display:block; width:56px; padding-left:8px; height:35px; background:url(../../assets/images/quan.png) no-repeat; background-size:contain; font-size:20px; font-weight:bold; color:#fff; text-align:center; line-height:35px; position:absolute; left:0; top:0; }
  .products-right{ margin-left:125px;}
  .content-products-price{ margin:0px 5px; padding:0 5px;clear: both; border:1px dashed #ddd; height:20px;}
  .content-products-price span{ color:#de105d; float: left; line-height:20px;}
  .content-products-price b{ font-size:16px;}
  .content-products-price font{ font-size:12px; float: right; line-height:20px;color:#aaa;}
  .content-products-name{ padding:5px; clear: both; height:40px; display:block; color: #666; font-size: 14px; font-weight: bold;overflow:hidden;}
  .content-products-sale{ padding:0 5px;clear: both;  color:#aaa;height:25px;}
  .content-products-sale font{ padding-left:5px; color:#fd7904; font-size:12px;}
  .content-products-sale span{ padding:5px 0; float: left;}
  .content-products-sale i{ width:25px; transform: scale(0.8); display: block; float: right; height:25px; }
  .content-products-sale .goods-ref-0{background:url(../../assets/images/ct_icons.png) -191px -60px no-repeat;}
</style>
