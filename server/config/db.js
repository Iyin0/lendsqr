require('dotenv').config()

const knex = require('knex')({
    client: 'mysql',
    version: '2.18.1',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'Isaac1@345',
        database: 'lendsqr',
    },
    // connection: {
    //     host: process.env.DB_HOST,
    //     user: process.env.DB_USER,
    //     password: process.env.DB_PASSWORD,
    //     database: process.env.DB_NAME,
    // },

    pool: { min: 0, max: 7 }
});

// knex.select('first_name')
//     .from('accounts')
//     .where('user_id', 2)
//     .then((res) => {
//         console.log(res)
//     })

// const getAllUsers = (fname, lname) => {
//     knex.select('*')
//         .from('accounts')
//         .where('first_name', fname)
//         .where('last_name', lname)
//         .then((res) => {
//             return res
//             // console.log(res)
//         })
// }

// const user = getAllUsers('John', 'James')

// console.log(user)

// console.log(process.env.PORT)


module.exports = knex;