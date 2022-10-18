const Accounts = require('../model/accounts')
const bcrypt = require('bcrypt')
const passport = require('passport')
require('../controller/passportLocalConfig')(passport)

exports.createUser = async (req, res, next) => {

    let { fname, lname, email, password } = req.body

    try {
        await bcrypt.hash(password, 10, (err, hash) => {
            let newUser = new Accounts(fname, lname, email, hash).createAcount();
            newUser.then((result) => {
                if (result === null) res.status(400).send('User Already Exist')
                else res.status(200).send('New User Created')
            })
        })

    } catch (error) {
        console.log(error)
        next()
    }
}

exports.authenticateUser = async (req, res, next) => {

    await passport.authenticate('local',
        (err, user) => {
            if (err) throw err
            if (!user) res.status(401).json({ message: 'User does not exist' })
            else {
                req.logIn(user, err => {
                    if (err) throw err
                    res.status(200).json({
                        message: 'Successfully Authenticated',
                        user_id: user.user_id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        acc_balance: user.acc_balance
                    })
                })
            }
        }
    )(req, res, next)
}

exports.getUser = async (req, res, next) => {
    await res.send(req.user)
}
