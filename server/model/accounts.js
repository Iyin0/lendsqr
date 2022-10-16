const knex = require('../config/db')
// const bycrypt = require('bycrypt')

class Accounts {
    constructor(fname, lname, email, password) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.acc_balance = 0;
    }

    async createAcount() {
        const [id] = await knex('accounts')
            .insert([{
                first_name: this.fname,
                last_name: this.lname,
                email: this.email,
                password: this.password,
                acc_balance: this.acc_balance
            }])

        return id
    }

    async getAccount(email, password) {
        const [user] = await knex.select('*')
            .from('accounts')
            .where('email', email)
            .where('password', password)
            .then((row) => { return row })

        if (user === undefined) {
            return 'user does not exist'
        }
        else {
            return user
        }
    }

}

module.exports = Accounts