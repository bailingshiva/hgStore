<template>
  <div class="nav-series">
    <span @click="navClick(item.category_name)" v-for="item in navSeries" >{{item.category_name}}</span>
    <div class="clear"></div>
  </div>
</template>
<script>
  import {get_GoodsList} from '../../api/api_goods'
  export default{
    created(){
      get_GoodsList({}).then((respone) => {
        this.goods=respone.data
      }).catch((error) => {
        throw new Error(error);
      })
    },
    data(){
      return {
        goods: [],
        ck_goods: []
      }
    },
    props: {
      navSeries: {
        type: Array,
        default: []
      }
    },
    methods:{
      navClick(ctname){
          if(this.goods){
             for(var i=0;i<this.goods.length;i++){
                 console.log(this.goods[i].goods_type)
                 if(this.goods[i].goods_type===ctname){
                   this.ck_goods.push(this.goods[i])
                 }
             }
             this.$store.commit('SET_CURGOODSSERIES',this.ck_goods)
            //console.log(this.$store.state.goods.goodsSeries,this.ck_goods)
            this.$router.push({
              path: `/list`
            })
          }
      }
    }
  }
</script>
<style>
  .clear{ clear: both}
  .nav-series{
    margin:5px;
  }
  .nav-series span {
    display: block;
    width: 20%;
    text-align:center;
    height:16px;
    margin:5px 0;
    line-height:16px;
    color:#666;
    border-right: 1px dashed #ddd;
    float: left;
  }
</style>
