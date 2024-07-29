import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('users', (table) => {
        table.uuid('id').defaultTo(knex.raw('gen_random_uuid()'));
        table.string('auth_id', 100);
        table.string('email', 100).notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('users');
}

