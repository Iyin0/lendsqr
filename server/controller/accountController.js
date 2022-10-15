const Accounts = require('../model/accounts')

exports.createUser = async (req, res, next) => {

    let { fname, lname, email, pw } = req.body

    try {
        let newUser = new Accounts(fname, lname, email, pw).createAcount();
        newUser.then((result) => {
            res.status(200).send('New User created')
        })
    } catch (error) {
        console.log(error)
        next()
    }
}

exports.getUser = async (req, res, next) => {

    let { fname, lname, email, pw } = req.body

    try {
        let user = new Accounts(fname, lname, email, pw).getAccount();
        user.then((result) => {
            res.status(200).json(result)
        })
    } catch (error) {
        console.log(error)
        next()
    }

}

// {
//     "fname": "Micheal",
//     "lname": "Anthony",
//     "email": "michealanthony@lendsqr.com",
//     "pw": "michealanthony"
// }