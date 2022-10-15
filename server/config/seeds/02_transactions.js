/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('transactions').del()
  await knex('transactions').insert([
    { transaction_id: 1, user_id: 1, acc_balance: 5000, transaction_amount: 5000, transaction_type: 'Deposit', transaction_status: 'Successful' },
    { transaction_id: 2, user_id: 2, acc_balance: 5000, transaction_amount: 5000, transaction_type: 'Deposit', transaction_status: 'Successful' },
    { transaction_id: 3, user_id: 3, acc_balance: 5000, transaction_amount: 5000, transaction_type: 'Deposit', transaction_status: 'Successful' },
    { transaction_id: 4, user_id: 4, acc_balance: 5000, transaction_amount: 5000, transaction_type: 'Deposit', transaction_status: 'Successful' },
    { transaction_id: 5, user_id: 1, acc_balance: 2000, transaction_amount: 3000, transaction_type: 'Withdrawal', transaction_status: 'Successful' },
    { transaction_id: 6, user_id: 2, acc_balance: 2000, transaction_amount: 3000, transaction_type: 'Withdrawal', transaction_status: 'Successful' },
    { transaction_id: 7, user_id: 3, acc_balance: 2000, transaction_amount: 3000, transaction_type: 'Withdrawal', transaction_status: 'Successful' },
    { transaction_id: 8, user_id: 4, acc_balance: 2000, transaction_amount: 3000, transaction_type: 'Withdrawal', transaction_status: 'Successful' },
    { transaction_id: 9, user_id: 1, acc_balance: 1000, transaction_amount: 1000, transaction_type: 'Transfer', transaction_status: 'Successful' },
    { transaction_id: 10, user_id: 2, acc_balance: 1000, transaction_amount: 1000, transaction_type: 'Transfer', transaction_status: 'Successful' },
  ]);
};
