const express = require('express');
const productController = require('./../controllers/sellProduct');
const authController = require('./../controllers/authController');

const router = express.Router();
router.use(authController.protect);
router.route('/').post(productController.sellProduct);

module.exports = router;
