const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.json({ message: "This is the welcome page" })
})

// get single user

module.exports = router