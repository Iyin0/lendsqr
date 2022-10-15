const express = require("express");
const morgan = require('morgan');
const accountRoutes = require('./router/accountRoutes');
const transactionsRoutes = require('./router/transactionsRoutes');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(morgan('dev'))
app.use(express.json())

// account routes
app.use('/api/accounts', accountRoutes)
app.use('/api/user', transactionsRoutes)

// user routes

app.listen(PORT, () => {
    console.log(`Server live on ${PORT}`)
});
