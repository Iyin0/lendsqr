const express = require("express")
const router = express.Router();
const user = require('../controller/transactionsController')

router.post("/deposit", user.addMoney);
router.post("/transfer", user.sendMoney);
router.post("/withdraw", user.withdrawMoney);
router.get("/balance", user.getBalance)

// get single user

module.exports = router