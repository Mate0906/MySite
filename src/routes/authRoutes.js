const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

const authController = new AuthController();

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

module.exports = router;