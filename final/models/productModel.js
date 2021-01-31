const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please give product name!']
  },
  category: {
    type: String,
    required: [true, 'please give product category!']
  },
  mobile: {
    type: Number,
    required: [true, 'please give your mobile']
  },
  email: {
    type: String,
    required: [true, 'please give your email']
  },
  address: {
    type: String,
    required: [true, 'please give your address!']
  },
  age: {
    type: Number,
    required: [true, 'specify age of product']
  }
});

const product = mongoose.model('product', productSchema);
module.exports = product;
