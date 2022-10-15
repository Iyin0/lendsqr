/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {

    return knex.schema
        .createTable('accounts', (table) => {
            table.increments('user_id').unique().primary().unsigned().notNullable();
            table.string('first_name', 255).notNullable();
            table.string('last_name', 255).notNullable();
            table.string('email', 255).unique().notNullable();
            table.string('password').notNullable();
            table.integer('acc_balance').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now())

        })

        .createTable('transactions', (table) => {
            table.increments('transaction_id').unique().primary().unsigned().notNullable();
            table.integer('user_id').notNullable().unsigned()
            table.foreign('user_id').references('accounts.user_id');   // foreign key
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.integer('acc_balance').unsigned().notNullable();
            table.integer('transaction_amount').unsigned().notNullable()
            table.string('transaction_type').notNullable()      // credit, debit, transfer
            table.string('recipient').notNullable()      // transfer recipient
            table.string('transaction_status').notNullable()   // successful or unsuccessful
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable('accounts').dropTable('transactions')
};
