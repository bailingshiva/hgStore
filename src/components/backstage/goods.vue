<template>
  <div class="manage-content">
    <div class="manage-operate">
      <div class="manage-operate-item manage-delect"><font>全选</font><span @click="showDelectPopup">删除</span></div>
      <div class="manage-operate-item manage-update"><span @click="showUpdataPopup">修改</span></div>
      <div class="manage-operate-item manage-insert">
        <div><em>+</em><span @click="showAddPopup" class="hidden-xs">添加产品</span></div>
      </div>
      <div class="manage-operate-search">
        <div><input  v-model="searchValue" placeholder="搜索产品" type="text"/><a @click="searchGoods" href="javascript:void(0)"></a></div>
      </div>
    </div>
    <div class="manage-con">
      <div class="manage-title">
        <span class="sp10 center">产品id</span>
        <span class="sp30 ">产品名称</span>
        <span class="sp20 center">产品价格</span>
        <span class="sp20 center">优惠券金额</span>
        <span class="sp20 center">商品来源</span>
      </div>
      <div class="manage-list">
        <div v-for="item in goods" @click="selectGoods(item)" class="manage-item"
             :class="{active: item.goods_id === selectId}">
          <span class="sp10 center">{{item.goods_id}}</span>
          <span class="sp30 ">{{item.goods_name}}</span>
          <span class="sp20 center">{{item.goods_price}}</span>
          <span class="sp20 center">{{item.goods_sale}}</span>
          <span class="sp20 center">{{item.goods_ref}}</span>
        </div>
      </div>
    </div>
    <popup :isShow="isDelectShowPop" ref="delect_s" :marginTop="mTop" :bWidth="bWidth"
           @on-close="closeBox('isDelectShowPop')">
      <div class="popup-word">确定删除吗？</div>
      <div class="popup-btn"><span @click="delecGoods" class="popup-ensure">确定</span><span @click="closeBox('isDelectShowPop')"
                                                                       class="popup-cansel">取消</span></div>
    </popup>
    <popup :isShow="isUpdateShowPop" :marginTop="mTop" :bWidth="bWidth" @on-close="closeBox('isUpdateShowPop')">
      <div class="goods-box">
        <p><span>产品名称</span><input id="update_name" v-model="u_goodsList.updateName" type="text"/></p>
        <p><span>产品价格</span><input id="update_price" v-model="u_goodsList.updatePrice" type="number"/></p>
        <p><span>产品优惠券金额</span><input id="update_sale" v-model="u_goodsList.updateSafe" type="number"/></p>
        <p><span>销量</span><input id="update_amount" v-model="u_goodsList.updateAmount" type="number"/></p>
        <p><span>产品来源</span><select id="update_ref" v-model="u_goodsList.updateRef">
          <option value="1">天猫</option>
          <option value="2">京东</option>
        </select></p>
        <p><span>产品图片</span><input id="update_image" type="file"/></p>
        <p><span>产品分类</span><select v-model="goodsList.updateType" id="update_type" lazy>
          <option v-for="item in cateList" v-bind:value="item.category_name">{{item.category_name}}</option>
        </select></p>
      </div>
      <div class="popup-btn"><span @click="updateGoods" class="popup-ensure">确定</span><span @click="closeBox('isUpdateShowPop')"
                                                                       class="popup-cansel">取消</span></div>
    </popup>
    <popup :isShow="isAddShowPop" :marginTop="mTop" :bWidth="bWidth" @on-close="closeBox('isAddShowPop')">
      <div class="goods-box">
        <p><font>*</font><span>产品名称</span><input id="add_name" v-model="goodsList.addName" type="text"/></p>
        <p><font>*</font><span>产品价格</span><input id="add_price" v-model="goodsList.addPrice" type="number"/></p>
        <p><font>*</font><span>产品优惠券金额</span><input id="add_sale" v-model="goodsList.addSafe" type="number"/></p>
        <p><font>*</font><span>销量</span><input id="add_amount" v-model="goodsList.addAmount" type="number"/></p>
        <p><span>产品来源</span><select v-model="goodsList.addRef" id="add_ref">
          <option value="1">天猫</option>
          <option value="2">京东</option>
        </select></p>
        <p><font>*</font><span>产品图片</span><input id="add_image" type="file" @change="onFileChange"/></p>
        <p><span>产品分类</span><select v-model="goodsList.addType" id="add_type">
          <option v-for="item in cateList" :value="item.category_name">{{item.category_name}}</option>
        </select></p>
      </div>

      <p class="warnWord">{{warnWord}}</p>
      <div class="popup-btn"><span @click="addGoods" class="popup-ensure">确定</span><span
        @click="closeBox('isAddShowPop')" class="popup-cansel">取消</span></div>
    </popup>
    <alert :is_ashow="is_ashow" @on-close="closeAlert('is_ashow')">
      {{alertWord}}
    </alert>
  </div>
</template>
<script>
  import popup from './popup'
  import alert from './alert'
  import {get_GoodsList,add_Goods,delect_Goods,update_Goods} from '../../api/api_goods'
  import {get_Category} from '../../api/api_category'
  export default{
      created(){
        this.getGoodsList()
        get_Category({}).then((respone) => {
          this.cateList=respone.data
          console.log(respone.data)
        }).catch((error) => {
          throw new Error(error);
        })
      },
    data(){
      return {
        isDelectShowPop: false,
        isUpdateShowPop: false,
        isAddShowPop: false,
        mTop:100,
        bWidth:500,
        is_ashow:false,
        alertWord:'提示信息',
        warnWord:'',
        selectId:'',
        cateList:[],
        searchValue:'',
        goodsList:{
          addName:'',
          addPrice:'',
          addSafe:'',
          addAmount:'',
          addRef:'',
          addImg:[],
          addType:''
        },
        u_goodsList:{
          updateId:'',
          updateName:'',
          updatePrice:'',
          updateSafe:'',
          updateAmount:'',
          updateRef:'',
          updateImg:[],
          updateType:''
        },
        goods:[]
      }
    },
    components: {
      popup,
      alert
    },
    methods:{
      getGoodsList(){
        get_GoodsList({})
          .then((respone) => {
            this.goods=respone.data
          })
          .catch((error) => {
            throw new Error(error);
          })
      },
      closeBox(attr){
        this[attr]=false
      },
      closeAlert(attr){
        this[attr]=false
      },
      showDelectPopup(){
        if (this.selectId) {
          this.is_ashow=false
          this.isDelectShowPop = true
        }
        else{
          this.is_ashow=true
          this.alertWord='请选择一行'
        }
      },
      onFileChange (e) {
        //this.goodsList.addImg=[]
        var files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        this.createImage(files)
      },
      createImage (file) {
        var vm = this
        var reader = null
        var leng = file.length
        for (var i = 0; i < leng; i++) {
          reader = new window.FileReader()
          reader.readAsDataURL(file[i])
          reader.onload = function (e) {
            vm.goodsList.addImg.push(e.target.result)
          }
        }
      },
      showUpdataPopup(){
        if (this.selectId) {
          console.log(this.$store.state.goods)
          var select_goods=this.$store.state.goods.goods
          this.u_goodsList.updateId = select_goods.goods_id
          this.u_goodsList.updateName = select_goods.goods_name
          this.u_goodsList.updatePrice = select_goods.goods_price
          this.u_goodsList.updateSafe = select_goods.goods_sale
          this.u_goodsList.updateAmount = select_goods.goods_amount
          this.u_goodsList.updateRef = select_goods.goods_ref
          this.u_goodsList.updateImg = select_goods.goods_img
          this.u_goodsList.updateType = select_goods.goods_type
          console.log(this.updateName,select_goods.goods_name);
          this.is_ashow=false
          this.isUpdateShowPop = true
        }
        else{
          this.is_ashow=true
          this.alertWord='请选择一行'
        }
      },
      searchGoods(){
        if (this.searchValue !== '' && this.searchValue !== '搜索优惠券') {
          var searchList=[]
          for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].goods_name.indexOf(this.searchValue)>=0){
              searchList.push(this.goods[i])
            }
          }
          this.goods=searchList
        }
        if (this.searchValue === ''){
          this.getGoodsList()
        }
      },
      showAddPopup(){
        this.isAddShowPop = true
      },
      selectGoods(item){
        this.is_ashow=false
        this.selectId=item.goods_id
        this.$store.commit('SET_CURGOODS', item);
        //this.selectGoods=item
      },
      addGoods(){
        if(this.goodsList.addName!=='' && this.goodsList.addPrice!=='' && this.goodsList.addSafe!=='' && this.goodsList.addAmount!=='' && this.goodsList.addImg!==[]) {
          add_Goods(this.goodsList)
            .then((respone) => {
              console.log(respone.data);
              this.isAddShowPop = false
              this.goodsList.addName=''
                this.goodsList.addPrice=''
                this.goodsList.addSafe=''
                this.goodsList.addAmount=''
                this.goodsList.addRef=''
                this.goodsList.addImg=[]
                this.goodsList.addType=''
              this.getGoodsList()
            })
            .catch((error) => {
              throw new Error(error);
            })
        }
        else{
            this.warnWord='带*为必填'
        }
      },
      delecGoods(){
        var p_data={
          p_d:this.selectId
        }
        delect_Goods(p_data).then((respone) => {
          console.log(respone);
          this.getGoodsList()
          this.isDelectShowPop = false
        })
          .catch((error) => {
            throw new Error(error);
          })
      },
      updateGoods(){
        update_Goods(this.u_goodsList).then((respone) => {
          console.log(respone);
          this.getGoodsList()
          this.isUpdateShowPop = false

          this.selectId=''
        })
          .catch((error) => {
            throw new Error(error);
          })
      }
    },
    watch:{
      searchValue(newVal) {
        console.log(newVal)
        if (newVal !== '' && newVal !== '搜索优惠券') {
          var searchList=[]
          for(var i=0;i<this.goods.length;i++){
              if(this.goods[i].goods_name.indexOf(newVal)>=0){
                searchList.push(this.goods[i])
              }
          }
          this.goods=searchList
        }
        if (newVal === ''){
          this.getGoodsList()
        }
      }
    }
  }
</script>
<style>
 .active{ background:#f8f8f8;}
 .popup-word{ padding:5px 0 0 10px; text-align:center; height:40px;  font-size:16px;}
 .popup-btn{ width:150px; margin:0 auto; height:35px;}
 .popup-ensure,.popup-cansel{width:60px; display: block; float: left; height:30px; background:#de105d; color:#fff; margin:0 auto; cursor: pointer; text-align: center; line-height: 30px; border-radius: 5px;}
 .popup-cansel{background:#ddd; color:#666; float:right; }
 .goods-box{ padding:10px; padding-bottom:10px;}
 .goods-box p{ height:35px;}
 .goods-box span{ display:block; width:120px; text-align: right; float: left; height:30px; line-height:30px;}
 .goods-box input{ height:25px; padding-left:10px; width:300px; float:right; border:1px solid #ddd; line-height:25px; margin-top:3px;}
 .goods-box select{ margin:5px 0 0 10px; border:1px solid #eee; padding:3px 5px; color:#aaa;}
 .goods-box   #add_image,#update_image{ border:none}
 .goods-box font{ float: left; line-height:35px; color:red }
  .warnWord{ text-align: center; height:30px;}
</style>
