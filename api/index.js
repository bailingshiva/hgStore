const express = require('express');
const router = express.Router();
const Goods=require('../model/goods.js');
const Category=require('../model/category.js');
router.get('/get_goods_list',function(req,res){
  Goods.find({},function(err,data){
    if(err){
      res.send(err);
    }
    if(data){
      res.send(data);
    }
    else{
      res.send("没有数据！");
    }
  })
})
router.post('/insert_goods_list',function(req,res){
 var g_id=parseInt(Math.random()*10000)
  var goodsList={
    goods_id:g_id,
    goods_name:req.query.addName,
    goods_price:req.query.addPrice,
    goods_sale:req.query.addSafe,
    goods_amount:req.query.addAmount,
    goods_ref:req.query.addRef,
    goods_img:req.query.addImg,
    goods_type:req.query.addType
  }
  Goods.create(goodsList, function (err, data) {
    if (err) {
      console.log(err);
    }
     res.send('插入成功！');
  })
})
router.post('/delect_goods',function(req,res){
  var good_id={
    goods_id:req.query.p_d
  }
  Goods.remove(good_id,function(err, data){
    if (err) {
      console.log(err);
    }
    res.send('删除成功！');
  })
})
router.post('/update_goods',function(req,res){
  var good_id={
    goods_id:req.query.updateId
  }
  var good_data={
    goods_name:req.query.updateName,
    goods_price:req.query.updatePrice,
    goods_sale:req.query.updateSafe,
    goods_amount:req.query.updateAmount,
    goods_ref:req.query.updateRef,
    goods_img:req.query.updateImg,
    goods_type:req.query.updateType
  }
  Goods.update(good_id,{$set:good_data},function(err, data){
    if (err) {
      console.log(err);
    }
    res.send('修改成功！');
  })
})
router.get('/get_category',function(req,res){
  Category.find({},function(err,data){
    if(err){
      res.send(err);
    }
    if(data){
      res.send(data);
    }
    else{
      res.send("没有数据！");
    }
  })
})
router.post('/insert_category',function(req,res){
  var cg_id=parseInt(Math.random()*10000)
  var cgList={
    category_id:cg_id,
    category_name:req.query.cateName
  }
  Category.create(cgList, function (err, data) {
    if (err) {
      console.log(err);
    }
    res.send('插入成功！');
  })
})
router.post('/delect_category',function(req,res){
  var category_id={
    category_id:req.query.ctg_id
  }
  Category.remove(category_id,function(err, data){
    if (err) {
      console.log(err);
    }
    res.send('删除成功！');
  })
})
router.post('/update_category',function(req,res){
  var cate_id={
    category_id:req.query.u_cateId
  }
  var cate_data={
    category_name:req.query.u_cateName
  }
  Category.update(cate_id,{$set:cate_data},function(err, data){
    if (err) {
      console.log(err);
    }
    res.send('修改成功！');
  })
})
module.exports = router;
