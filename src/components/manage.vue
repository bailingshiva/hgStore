<template>
  <div class="manage">
    <!--左侧-->
    <div class="manage-menu hidden-xs">
      <div class="manage-logo"><a href="#"><img src="../assets/images/manage-logo.png"/></a></div>
      <div class="manage-menu-list">
        <router-link :to="{path:'goods'}" tag="a">产品管理</router-link>
        <router-link :to="{path:'category'}" tag="a">产品类目管理</router-link></div>
    </div>
    <!--end 左侧-->
    <!--右侧-->
    <keep-alive><router-view></router-view></keep-alive>
    <!--end 右侧-->
  </div>
</template>
<script>
  import {Alert,setDivCenter} from '../assets/jscript/Alert'
export default{

}
</script>
<style>
  .manage-menu{ width:200px; background:#383838; position:fixed; left:0; top:0; min-height:1080px;}
  .manage-logo{ height:80px; background:#de105d; text-align:center; }
  .manage-logo img{ margin-top:20px;}
  .manage-menu-list{ padding:10px;}
  .manage-menu-list a{ display:block; padding-left:30px; height:30px; margin:10px 0; font-size:16px; color:#888;}
  .manage-content{ min-height:1080px; background:#fff; margin-left:200px;}
  .manage-operate{height:80px; border-bottom: 1px solid #ddd; }
  .manage-operate-item{ margin:15px 0; height:30px; float:left; padding: 10px 20px; border-right:1px dashed #ddd;}
  .manage-operate-item span{ cursor: pointer;}
  .manage-delect input{ float: left; margin: 10px 5px;}
  .manage-delect font{ float:left; display: block; margin:5px; font-size:14px;}
  .manage-delect span{ float: left; display: block;padding:3px 10px;font-size:16px; border:1px solid #ddd; border-radius:10px;}
  .manage-update span{ display: block;padding:3px 10px;font-size:16px; border:1px solid #ddd; border-radius:10px; }
  .manage-insert{border:none}
  .manage-insert div{  padding:3px 10px; border:1px solid #de105d; border-radius:10px; color:#de105d;}
  .manage-insert em{ color:#de105d; float:left; font-size:16px;}
  .manage-insert span{ font-size:16px; color:#de105d; padding-left:5px;}
  .manage-operate-search{ width:200px; float:right; padding-right:10px;}
  .manage-operate-search div{ height:30px; border:1px solid #de105d; margin-top:23px; border-radius:15px; padding:0px 0px 0px 15px; }
  .manage-operate-search input{ border:none; float:left; margin-top:3px; line-height:25px; width:140px;}
  .manage-operate-search a{ display:block; float:right; width:25px; height:25px; background:url(../assets/images/ct_icons.png) -13px -150px no-repeat; margin:2px 10px 0 0px;}
  .manage-title{ height:50px; line-height:50px; color:#aaa;  background:#eee;}
  .manage-title span,.manage-item span{ display: block; float:left;}
  .sp10{ width:10%;}
  .sp20{ width:20%;}
  .sp30{ width:30%;}
  .sp15{ width:15%;}
  .sp40{ width:40%;}
  .sp50{ width:50%;}
  .center{ text-align: center;}
  .manage-item{ height:35px; line-height: 35px; border-bottom: 1px dashed #ddd; cursor: pointer; }
  .alplan{ position:fixed; width:100%; height:100%;z-index:99; top:0; left:0;}
  .alplan-box{ width:300px; border-radius:3px;border:5px solid #eee\9; -moz-box-shadow:1px 1px 5px #333333; -webkit-box-shadow:1px 1px 5px #333333; box-shadow:1px 1px 5px #333333;background:#fff; margin:0 auto; /*margin-top:100px;*/}
  .alplan-title{ height:30px;border-radius:3px 3px 0 0; line-height:30px; color:#666; padding:0 10px; background:#eee;}
  .alplan-text{ padding:30px 20px 10px 20px; text-align:center; /*color:#e54724;*/color:#0e4182; font-weight:bold;  font-size:16px;}
  .alplan-btn{ height:30px; padding:20px; text-align:center;}
  .alplan-btn span{ padding:5px 10px; cursor:pointer; background:#ddd; border-radius:3px; color:#666;}
</style>
