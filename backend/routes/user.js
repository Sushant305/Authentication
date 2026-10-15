const express = require('express');
const router = express.Router()
// user Controller function 
const { loginUser, signUpUser } = require('../controllers/userController');


// login route
router.post('/login',loginUser)

// signup roouter
router.post('/signup',signUpUser)


module.exports = router;
