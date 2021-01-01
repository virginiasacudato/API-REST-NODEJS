const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const {loginValidation} = require('../middlewares/users-validate');

router.post('/signup', loginValidation, usersController.signup);
router.post('/login', loginValidation, usersController.login);



module.exports = router;