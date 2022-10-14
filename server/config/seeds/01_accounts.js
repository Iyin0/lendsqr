/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('accounts').del()
  await knex('accounts').insert([
    { user_id: 1, first_name: 'John', last_name: 'James', email: 'johnjames@lendsqr.com', password: 'johnjames' },
    { user_id: 2, first_name: 'Micheal', last_name: 'Anthony', email: 'michealanthiny@lendsqr.com', password: 'michealanthony' },
    { user_id: 3, first_name: 'Stephen', last_name: 'Strange', email: 'stephenstrange@lendsqr.com', password: 'stephenstrange' },
    { user_id: 4, first_name: 'Rebecca', last_name: 'Becca', email: 'rebeccabecca@lendsqr.com', password: 'rebeccabecca' }
  ]);
};
