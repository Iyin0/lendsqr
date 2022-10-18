const express = require("express");
const morgan = require('morgan');
const accountRoutes = require('./router/accountRoutes');
const transactionsRoutes = require('./router/transactionsRoutes');
require('dotenv').config();
const flash = require('express-flash')
const session = require('express-session')
const cors = require('cors');
const passport = require("passport");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(
    cors({
        origin: "*",
        credentials: true
    })
)

app.use(flash())
app.use(session({
    secret: 'lendsqr-backend-assessment',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())


app.use('/api/accounts', accountRoutes)
app.use('/api/user', transactionsRoutes)


app.listen(PORT, () => {
    console.log(`Server live on ${PORT}`)
});
