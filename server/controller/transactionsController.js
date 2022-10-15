const Transaction = require('../model/transactions')
const knex = require('../config/db')

exports.addMoney = async (req, res, next) => {

    const { user_id, amount } = req.body

    try {
        let deposit = new Transaction(user_id, amount).deposit()

        deposit.then((result) => {
            res.status(200).json(result)
        })
    } catch (error) {
        console.log(error)
        next()
    }
}

exports.sendMoney = async (req, res, next) => {

    const { user_id, amount, recipient_id } = req.body

    try {
        let transfer = new Transaction(user_id, amount, recipient_id).transfer()

        transfer.then((result) => {
            res.status(200).json(result)
        })

    } catch (error) {
        console.log(error)
        next()
    }
}

exports.withdrawMoney = async (req, res, next) => {

    const { user_id, amount } = req.body

    try {
        let withdrawal = new Transaction(user_id, amount).withdraw()

        withdrawal.then((result) => {
            res.status(200).json(result)
        })
    } catch (error) {
        console.log(error)
        next()
    }
}

exports.getBalance = async (req, res, next) => {

    const { user_id } = req.body

    try {
        let balance = new Transaction().getBalance(user_id)

        balance.then((result) => {
            res.status(200).json('Your balance is ' + result)
        })
    } catch (error) {
        console.log(error)
        next()
    }
}
