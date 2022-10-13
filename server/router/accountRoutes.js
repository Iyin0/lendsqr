const express = require("express")
const router = express.Router();
const account = require('../controller/accountController')

router.post("/", account.createUser);
router.get("/", account.getUser)

module.exports = router