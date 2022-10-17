const express = require("express");
const router = express.Router();
const account = require('../controller/accountController')


router.post("/register", account.createUser);
router.post("/login", account.authenticateUser)
router.get('/user', account.getUser)

module.exports = router