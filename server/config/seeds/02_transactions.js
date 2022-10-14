/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('transactions').del()
  await knex('transactions').insert([
    { transaction_id: 1, balance: 5000, transaction_amount: 30, transaction_type: 'Deposit', transaction_status: 'Successful' },
    { transaction_id: 2, balance: 5000, transaction_amount: 30, transaction_type: 'Deposit', transaction_status: 'Successful' },
    { transaction_id: 3, balance: 5000, transaction_amount: 30, transaction_type: 'Deposit', transaction_status: 'Successful' },
    { transaction_id: 4, balance: 5000, transaction_amount: 30, transaction_type: 'Deposit', transaction_status: 'Successful' },
    { transaction_id: 5, balance: 5000, transaction_amount: 30, transaction_type: 'Deposit', transaction_status: 'Successful' },
    { transaction_id: 6, balance: 5000, transaction_amount: 30, transaction_type: 'Deposit', transaction_status: 'Successful' },
    { transaction_id: 7, balance: 5000, transaction_amount: 30, transaction_type: 'Deposit', transaction_status: 'Successful' },
    { transaction_id: 8, balance: 5000, transaction_amount: 30, transaction_type: 'Deposit', transaction_status: 'Successful' },
    { transaction_id: 9, balance: 5000, transaction_amount: 30, transaction_type: 'Deposit', transaction_status: 'Successful' },
    { transaction_id: 10, balance: 5000, transaction_amount: 30, transaction_type: 'Deposit', transaction_status: 'Successful' },
  ]);
};
