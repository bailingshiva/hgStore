const mongoose = require('./db.js');
var goodsSchema = new mongoose.Schema({
  goods_id: {
    type: String,
    required: true
  },
  goods_name: {
    type: String,
    required: true
  },
  goods_price: {
    type: Number,
    required: true
  },
  goods_sale: {
    type: Number,
    required: true
  },
  goods_amount: {
    type: Number,
    required: true
  },
  goods_img: {
    type: Object,
    required: true
  },
  goods_ref: String,
  goods_type: String
});
module.exports = mongoose.model('goods', goodsSchema);
