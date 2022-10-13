const mysql = require('mysql');

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

try {
    connection.connect()
} catch (error) {
    console.log("Database connection failed:" + error)
}

module.exports = connection;