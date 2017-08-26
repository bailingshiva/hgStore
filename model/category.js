const mongoose = require('./db.js');
var categorySchema = new mongoose.Schema({
  category_id: {
    type: String,
    required: true
  },
  category_name: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('category', categorySchema);
