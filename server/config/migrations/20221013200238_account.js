/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    // const account_table = await knex.schema.hasTable('account')
    // const transaction_table = await knex.schema.hasTable('transactions')
    return knex.schema
        .createTable('accounts', (table) => {
            table.increments('user_id').unique().primary().unsigned().notNullable();
            table.string('first_name', 255).notNullable();
            table.string('last_name', 255).notNullable();
            table.string('email', 255).unique().notNullable();
            table.string('password').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now())
            table.timestamp('updated_at').defaultTo(knex.fn.now())

        })

        .createTable('transactions', (table) => {
            table.increments('transaction_id').unique().primary().unsigned().notNullable();
            table.foreign('user_id').references('user_id');   // foreign key
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.integer('balance').unsigned().notNullable();
            table.string('transaction_type').notNullable()      // credit, debit, transfer
            table.boolean('transaction_status').notNullable()   // successful or unsuccessful
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable('accounts').dropTable('transactions')
};
