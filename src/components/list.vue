<template>
  <div class="list">
    <div class="list-top"><list-header></list-header></div>
    <div class="list-content">
      <good-list :goods="seriesGoods"></good-list>
    </div>
  </div>
</template>
<script>
  import goodList from './front_bases/good_list'
  import listHeader from './front_bases/header'
  export default{
    components: {
      goodList,
      listHeader
    },
    data(){
      return {
        seriesGoods: []
      }
    },
    created(){
      this.seriesGoods=this.$store.state.goods.goodsSeries
      console.log(this.seriesGoods,this.$store.state.goods.goodsSeries)
    }
  }
</script>
<style>
  .list{  width: 100%; height:100% }
  .list-top{ height:30px;}
  .list-content{ position: relative; height:100%;}
</style>
