const Accounts = require('../model/accounts')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

const initialize = (passport) => {

    passport.use(
        new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
            async function verify(req, username, password, done) {

                const user = await new Accounts().getAccountByEmail(username)

                if (await user === undefined) {
                    return done(null, false, { message: 'No user with that email' })

                }
                try {
                    if (await bcrypt.compare(password, user.password)) {
                        return done(null, user)
                    }
                    else {
                        return done(null, false, { message: 'Password incorrect' })
                    }
                } catch (error) {
                    return done(error)
                }
            }))

    passport.serializeUser((user, done) => done(null, user.user_id))
    passport.deserializeUser(async (user_id, done) => {
        await new Accounts().getAccountById(user_id), (err, user) => {
            if (err) { return done(err) }
            const userInfo = {
                user_id: user.user_id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                acc_balance: user.acc_balance
            }

            return done(null, userInfo)
        }
    })
}

module.exports = initialize