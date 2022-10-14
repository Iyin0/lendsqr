const Accounts = require('../model/accounts')

exports.createUser = async (req, res, next) => {

    try {
        let newUser = new Accounts('Jacob', 'Zuma', 'jacobzuma@lendsqr.com', 'acobzuma').createAcount();
        newUser.then((result) => {
            res.status(200).send('New User created')
        })
    } catch (error) {
        console.log(error)
        next()
    }
}

exports.getUser = async (req, res, next) => {

    try {
        let user = new Accounts('Micheal', 'Anthony', 'michealanthony@lendsqr.com', 'michealanthony').getAccount();
        user.then((result) => {
            res.status(200).json({ result })
        })
    } catch (error) {
        console.log(error)
        next()
    }

}