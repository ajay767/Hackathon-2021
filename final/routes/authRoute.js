const express = require('express');
const authController = require('./../controllers/authController');

const router = express.Router();

router.route('/signup').post(authController.signUp);
router.route('/login').post(authController.login);

router.use(authController.protect);
router.route('/me').get(authController.getUser);
router.route('/me/update').get(authController.updateUser);

module.exports = router;
