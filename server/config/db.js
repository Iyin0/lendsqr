require('dotenv').config({ path: '../.env' })

const knex = require('knex')({
    client: 'mysql',
    version: '2.18.1',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },

    pool: { min: 0, max: 7 }
});

module.exports = knex;