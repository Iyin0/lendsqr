const express = require("express")
const router = express.Router();
const user = require('../controller/userController')

router.put("/credit", user.addMoney);
router.put("/transfer", user.sendMoney);
router.put("/debit", user.withdrawMoney);
router.get("/balance", user.getBalance)

// get single user

module.exports = router