exports.addMoney = async (req, res, next) => {
    res.send("Money Added")
}

exports.sendMoney = async (req, res, next) => {
    res.send("Money Sent")
}

exports.withdrawMoney = async (req, res, next) => {
    res.send("Money Withdrawn")
}

exports.getBalance = async (req, res, next) => {
    res.send("Balance Retrieved")
}

// get the balance in the database
// check if it is not less than zero
// make changes to the balance
// update the new balance in the database
