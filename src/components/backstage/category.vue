<template>
  <div class="manage-content">
    <div class="manage-operate">
      <div class="manage-operate-item manage-delect"><font>全选</font><span @click="showDelectPopup">删除</span></div>
      <div class="manage-operate-item manage-update"><span @click="showUpdataPopup">修改</span></div>
      <div class="manage-operate-item manage-insert"><div><em>+</em><span @click="showAddPopup" class="hidden-xs">添加类目</span></div></div>
      <div class="manage-operate-search"><div><input v-model="searchValue" placeholder="搜索类目" type="text" /><a @click="searchGate" href="javascript:void(0)"></a></div></div>
    </div>
    <div class="manage-con">
      <div class="manage-title">
        <span class="sp30 center">类目id</span>
        <span class="sp50 center">类目名称</span>
      </div>
      <div class="manage-list">
        <div v-for="item in category" class="manage-item" @click="selectGoods(item)" :class="{active: item.category_id === selectId}">
          <span class="sp30 center">{{item.category_id}}</span>
          <span class="sp50 center ">{{item.category_name}}</span>
        </div>
      </div>
    </div>
    <popup :isShow="isDelectShowPop" ref="delect_s" :marginTop="mTop" :bWidth="bWidth" @on-close="closeBox('isDelectShowPop')">
      <div class="popup-word">确定删除吗？</div>
      <div class="popup-btn"><span @click="delectCategory" class="popup-ensure">确定</span><span @click="closeBox('isDelectShowPop')" class="popup-cansel">取消</span></div>
    </popup>
    <popup :isShow="isUpdateShowPop" :marginTop="mTop" :bWidth="bWidth" @on-close="closeBox('isUpdateShowPop')">
      <div class="goods-box">
        <p><font>*</font><span>类目名称</span><input v-model="u_cg_list.u_cateName" type="text" /> </p>
      </div>
      <div class="popup-btn"><span @click="updateCategory" class="popup-ensure">确定</span><span @click="closeBox('isUpdateShowPop')" class="popup-cansel">取消</span></div>
    </popup>
    <popup :isShow="isAddShowPop" :marginTop="mTop" :bWidth="bWidth" @on-close="closeBox('isAddShowPop')">
      <div class="goods-box">
        <p><font>*</font><span>类目名称</span><input v-model="cg_list.cateName" type="text" /> </p>
      </div>
      <p class="warnWord">{{warnWord}}</p>
      <div class="popup-btn"><span @click="addCategory" class="popup-ensure">确定</span><span @click="closeBox('isAddShowPop')" class="popup-cansel">取消</span></div>
    </popup>
    <alert :is_ashow="is_ashow" @on-close="closeAlert('is_ashow')">
      {{alertWord}}
    </alert>
  </div>
</template>
<script>
  import popup from './popup'
  import alert from './alert'
  import {get_Category,add_Category,delect_Category,update_Category} from '../../api/api_category'
  export default{
    created(){
        this.getCategory()
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
        selectId:'',
        searchValue:'',
        warnWord:'',
        cg_list:{
          cateName:''
        },
        u_cg_list:{
          u_cateId:'',
          u_cateName:''
        },
        category:[]
      }
    },
    components: {
      popup,
      alert
    },
    methods:{
      getCategory(){
        get_Category({}).then((respone) => {
          this.category=respone.data
          console.log(respone.data)
        }).catch((error) => {
            throw new Error(error);
          })
      },
      addCategory(){
        if (this.cg_list.cateName !== '') {
          add_Category(this.cg_list)
            .then((respone) => {
              this.is_ashow=true
              this.alertWord=respone.data
              this.isAddShowPop = false
              this.getCategory()
            }) .catch((error) => {
                throw new Error(error);
              })
        }
        else {
          this.warnWord='请填写类目名'
        }
      },
      delectCategory(){
          var ctg_id={
            ctg_id:this.selectId
          }
        delect_Category(ctg_id).then((respone) => {
          this.is_ashow=true
          this.alertWord=respone.data
          this.isDelectShowPop= false
          this.getCategory()
        }).catch((error) => {
          throw new Error(error);
        })
      },
      updateCategory(){
        update_Category(this.u_cg_list).then((respone) => {
            console.log(respone)
          this.is_ashow=true
          this.alertWord=respone.data
          this.isUpdateShowPop= false
          this.getCategory()
        }).catch((error) => {
          throw new Error(error);
        })
      },
      searchGate(){
        if (this.searchValue !== '' && this.searchValue !== '搜索优惠券') {
          var searchList=[]
          for(var i=0;i<this.category.length;i++){
            if(this.category[i].category_name.indexOf(this.searchValue)>=0){
              searchList.push(this.category[i])
            }
          }
          this.category=searchList
        }
        if (this.searchValue === ''){
          this.getCategory()
        }
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
      showUpdataPopup(){
        if (this.selectId) {
          this.is_ashow=false
          this.isUpdateShowPop = true
          var select_category=this.$store.state.category.category
          this.u_cg_list.u_cateId=select_category.category_id
          this.u_cg_list.u_cateName=select_category.category_name
        }
        else{
          this.is_ashow=true
          this.alertWord='请选择一行'
        }
      },
      showAddPopup(){
        this.isAddShowPop = true
      },
      selectGoods(item){
        this.is_ashow=false
        this.selectId=item.category_id
        this.$store.commit('SET_CURCATEGORY', item);
      }
    },
    watch:{
      searchValue(newVal) {
        console.log(newVal)
        if (newVal !== '' && newVal !== '搜索优惠券') {
          var searchList=[]
          for(var i=0;i<this.category.length;i++){
            if(this.category[i].category_name.indexOf(newVal)>=0){
              searchList.push(this.category[i])
            }
          }
          this.category=searchList
        }
        if (newVal === ''){
          this.getCategory()
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
  .goods-box{ padding:10px; padding-bottom:30px;}
  .goods-box p{ height:35px;}
  .goods-box span{ display:block; width:120px; text-align: right; float: left; height:30px; line-height:30px;}
  .goods-box input{ height:25px; padding-left:10px; width:300px; float:right; border:1px solid #ddd; line-height:25px; margin-top:3px;}
  .goods-box select{ margin:5px 0 0 10px; border:1px solid #eee; padding:3px 5px; color:#aaa;}
  .goods-box   #goods_img{ border:none}
  .goods-box font{ float: left; line-height:35px; color:red }
  .warnWord{ text-align: center; height:30px;}
</style>
