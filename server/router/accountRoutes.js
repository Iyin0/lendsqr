const express = require("express")
const router = express.Router();
const account = require('../controller/accountController')

router.post("/register", account.createUser);
router.get("/login", account.getUser)

module.exports = router