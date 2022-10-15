const knex = require('../config/db')

class Transaction {
    constructor(user_id, amount, recipient_id) {
        this.user_id = user_id;
        this.amount = amount;
        this.recipient = recipient_id
    }

    async getBalance(id) {    // gets the account balance of the user
        const [acc_bal] = await knex.select('acc_balance')
            .from('accounts')
            .where('user_id', id)
            .then((result) => {
                return result
            })

        if (acc_bal === undefined) {
            return 'Account Does not exist'
        }

        else {
            return acc_bal.acc_balance
        }
    }

    async updateBalance(new_acc) {

        // update user account balance after a successful transaction

        await knex('accounts')
            .where('user_id', this.user_id)
            .update({
                acc_balance: new_acc
            })


        // return new_bal
    }

    async getRecipient(id) {
        const [recipient] = await knex.select('*')
            .from('accounts')
            .where('user_id', id)
            .then((row) => { return row })

        return recipient
    }

    async deposit() {
        // add the amount to existing balance

        // get the account balance from the accounts table
        let current_acc = await this.getBalance(this.user_id)

        if (this.amount > 0) {
            let new_acc = current_acc + this.amount

            return knex('transactions')
                .insert([{
                    user_id: this.user_id,
                    acc_balance: new_acc,
                    transaction_amount: this.amount,
                    transaction_type: 'Deposit',
                    transaction_status: 'Successful',
                    recipient: 'self'
                }])
                .then(() => {
                    this.updateBalance(new_acc)
                    return 'Account Credited Successfully!!!'
                })
        }
        else {
            return 'You cannot credit your account with no money!'
        }


    }

    async updateRecipient() {

        // update recipient account balance after successful transfer

        let current_acc = await this.getBalance(this.recipient)

        let new_acc = current_acc + this.amount

        await knex('accounts')
            .where('user_id', this.recipient)
            .update({
                acc_balance: new_acc
            })
    }

    async transfer() {
        // remove amount from existing balance and add to someone else's account balance

        let current_acc = await this.getBalance(this.user_id)

        let verify_recipient = await this.getRecipient(this.recipient)

        if (this.user_id === this.recipient) {

            return 'You cannot transfer to yourself'
        }
        else if (verify_recipient === undefined) {     // to verify recipient

            return 'Your recipient does not exist'

        }
        else {
            if (this.amount > 0) {

                if (this.amount <= current_acc) {
                    let new_acc = current_acc - this.amount

                    return knex('transactions')
                        .insert([{
                            user_id: this.user_id,
                            acc_balance: new_acc,
                            transaction_amount: this.amount,
                            transaction_type: 'Transfer',
                            transaction_status: 'Successful',
                            recipient: this.recipient
                        }])
                        .then(() => {
                            this.updateBalance(new_acc)
                            this.updateRecipient()
                            return 'Transfer Successful!!!'
                        })
                }
                else {
                    return 'Insufficient Fund'
                }
            }
            else {
                return 'You cannot transfer no money'
            }
        }


    }


    async withdraw() {
        // remove amount from existing balance

        let current_acc = await this.getBalance(this.user_id)

        if (this.amount > 0) {

            if (this.amount <= current_acc) {
                let new_acc = current_acc - this.amount

                return knex('transactions')
                    .insert([{
                        user_id: this.user_id,
                        acc_balance: new_acc,
                        transaction_amount: this.amount,
                        transaction_type: 'Withdrawal',
                        transaction_status: 'Successful',
                        recipient: 'self'
                    }])
                    .then(() => {
                        this.updateBalance(new_acc)
                        return 'Withdrawal Successful!!!'
                    })
            }
            else {
                return 'Insufficient Fund'
            }
        }
        else {
            return 'You cannot withdraw no money'
        }

    }
}

module.exports = Transaction