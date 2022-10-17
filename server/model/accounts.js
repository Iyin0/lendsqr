const knex = require('../config/db')

class Accounts {
    constructor(fname, lname, email, password) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
    }

    async getAccountByEmail(email) {
        const [user] = await knex.select('*')
            .from('accounts')
            .where('email', email)
            .then((row) => { return row })

        return user
    }

    async getAccountById(id) {
        const [user] = await knex.select('*')
            .from('accounts')
            .where('user_id', id)
            .then((row) => { return row })

        return user
    }

    async createAcount() {

        const userExist = await this.getAccountByEmail(this.email)

        if (userExist) {
            return null
        }
        else {
            await knex('accounts')
                .insert([{
                    first_name: this.fname,
                    last_name: this.lname,
                    email: this.email,
                    password: this.password,
                    acc_balance: 0
                }])

            return "New user created"
        }
    }

}

module.exports = Accounts