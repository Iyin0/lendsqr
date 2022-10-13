const express = require("express");
const morgan = require('morgan');
const accountRoutes = require('./router/accountRoutes');
const userRoutes = require('./router/userRoutes')

const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(morgan('dev'))

// account routes
app.use('/api/accounts', accountRoutes)
app.use('/api/user', userRoutes)

// user routes

app.listen(PORT, () => {
    console.log(`Server live on ${PORT}`)
});
