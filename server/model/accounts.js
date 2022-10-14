const knex = require('../config/db')
// const bycrypt = require('bycrypt')

class Accounts {
    constructor(fname, lname, email, password) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password
    }

    createAcount() {
        return knex('accounts')
            .insert([{
                first_name: this.fname,
                last_name: this.lname,
                email: this.email,
                password: this.password
            }])
            .then((response) => { return response })
    }

    getAccount() {
        return knex.select('*')
            .from('accounts')
            .where('first_name', this.fname)
            .where('last_name', this.lname)
            .then((row) => { return row })
    }
}

module.exports = Accounts