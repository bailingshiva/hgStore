<template>
  <div class="header">
    <div class="header-top">
      <router-link class="header-logo" :to="{path:'./'}" tag="div"><img src="../../assets/images/logo.png"/>
      </router-link>
      <div class="search">
        <input class="pull-left" v-model="searchValue" placeholder="搜索优惠券" type="text"/>
        <a class="pull-right" @click="clickSearch()" href="javascript:void(0)"><i></i></a></div>
    </div>

    <div v-if="slshow" :style="{height:bodyHeight+'px'}" class="header-con">
      <div @click="closeSearch" class="closeSearch">关闭搜索</div>
      <div class="glist">
      <goods-list ref="search_list" :goods="searchList"></goods-list>
      </div>
    </div>

  </div>
</template>
<style>
  .header{ margin:0;}
  .header-logo{ position: absolute; left:5px; top:6px; width:100px;}
  .header-logo img{width:100%;}
  .search{ height:20px; margin: 5px 5px 0 115px; border:3px solid #de105d; border-radius:5px; position: relative;}
  .search input{ border:0; height:20px; padding-left:5px; background: none; margin-top:0; line-height:20px; margin-right:25px;color:grey;}
  .search a{ display:block; width:20px; position:absolute; right:0; top:0px; height:20px;  background:#de105d; }
  .search i{ display:block;width:20px; height:20px;background:url(../../assets/images/ct_icons.png) -221px -60px no-repeat;}
  .header-top{ margin-top:5px;}
  .header-con{ position:absolute; z-index: 15; width:100%; background: #fff; top:35px; left:0;}
  .closeSearch{ height:30px; background:#ddd; text-align: center; line-height:30px; font-size:14px;}
  .glist{  height:100%; position:relative}
</style>
<script>
  import goodsList from './good_list'
  import {get_GoodsList} from '../../api/api_goods'
  export default{
    data(){
      return {
        searchList: [],
        goods: [],
        searchValue: '',
        bodyHeight: '',
        slshow: false
      }
    },
    created(){
      get_GoodsList({}).then((respone) => {
        this.goods = respone.data
      }).catch((error) => {
        throw new Error(error);
      })

      var bh = document.body.offsetHeight
      this.bodyHeight = bh
    },
    computed: {},
    methods: {
      clickSearch(){
        var slArr = []
        if (this.searchValue !== '搜索优惠券' && this.searchValue !== '') {
          for (var i = 0; i < this.goods.length; i++) {
            if (this.goods[i].goods_name.indexOf(this.searchValue) >= 0) {
              slArr.push(this.goods[i])
            }
          }
          if (slArr.length > 0) {
            this.slshow = true
          }
          else {
            this.slshow = false
          }
          this.searchList = slArr
          console.log(this.isshow, this.searchList)
        }
      },
      closeSearch(){
        this.slshow = false
      }
    },
    components: {
      goodsList
    },
    watch: {
      searchValue(newVal) {
          console.log(newVal)
        if (newVal !== '' && newVal !== '搜索优惠券') {
          this.slshow = true
          var bh = document.body.offsetHeight
          this.bodyHeight = bh
        }
        if (newVal === ''){
          this.slshow = false
        }
      }
    }
  }
</script>
