<template>
  <div class="index">

    <!---头部-->
    <div class="index-header">
      <in-header></in-header>
    </div>
    <!---end 头部-->
    <!--banner-->
    <div class="index-banner">
      <in-banner :sliders="sliders"></in-banner>
    </div>
    <!--end banner-->
    <!--分类-->
    <div class="index-series">
      <nav-series :navSeries="navSeries"></nav-series>
    </div>
    <!--end 分类-->
    <!--标语-->
    <div class="index-slogan">
      <slogan></slogan>
    </div>
    <!--end 标语-->
    <!--商品列表-->
    <div class="index-goods">
      <div class="content-tab page-header">
        <h1>领券秒杀精选 <small>/ 实时更新 / 商家内部券</small> </h1>
      </div>
      <good-list class="good-contain" :goods="goods"></good-list>
    </div>
    <!--end 商品列表-->
  </div>
</template>
<script>
  import inHeader from './front_bases/header'
  import inBanner from './front_bases/banner'
  import navSeries from './front_bases/nav_series'
  import slogan from './front_bases/slogan'
  import goodList from './front_bases/good_list'
  import {get_GoodsList} from '../api/api_goods'
  import {get_Category} from '../api/api_category'
  export default{
    created(){
      get_GoodsList({}).then((respone) => {
        this.goods=respone.data
      }).catch((error) => {
          throw new Error(error);
        })
      get_Category({}).then((respone) => {
        this.navSeries=respone.data
      }).catch((error) => {
        throw new Error(error);
      })
    },
    data (){
      return {
        tittle: '首页',
        sliders: [
          {
            "imgUrl": require("../assets/images/banner.jpg"),
            "linkUrl": "/"
          },
          {
            "imgUrl": require("../assets/images/banner.jpg"),
            "linkUrl": "/"
          },
          {
            "imgUrl": require("../assets/images/banner.jpg"),
            "linkUrl": "/"
          }
        ],
        navSeries: [],
        goods:[]
      }
    },
    components: {
      inHeader,
      inBanner,
      navSeries,
      slogan,
      goodList
    }
  }
</script>
<style>
  /*.index{ position: fixed; width: 100%; height:100%; top:0; bottom:0;}
  .index-scroll{height: 100%;overflow: hidden}*/
  .index-banner { padding-top: 5px;}
  .content-tab{ padding:5px 0 0 5px; border:none;}
  .content-tab h1{ color:#de105d; font-size:16px; margin:0;}
  .content-tab small{ font-size:12px; color:#aaa;}
  .index-goods{ position: relative; height:500px;}
  .good-contain{ margin-top:35px;}
</style>
