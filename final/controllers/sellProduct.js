/* eslint-disable no-console */
const Product = require('./../models/productModel');
const User = require('./../models/userModel');
const AppError = require('./../utils/appError');

exports.sellProduct = async (req, res, next) => {
  console.log(req.body);
  const { name, age, mobile, address, category } = req.body;
  const { email } = req.user;

  const product = await Product.create({
    name,
    age,
    mobile,
    address,
    category,
    email
  });
  await User.findOneAndUpdate(email, { $inc: { coin: 80 } });

  if (!product) {
    next(new AppError('something bad happened!', 404));
  }
  res.status(200).json({
    status: 'success',
    message: 'Product is added in our list',
    product
  });
};
