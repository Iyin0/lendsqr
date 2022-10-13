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
