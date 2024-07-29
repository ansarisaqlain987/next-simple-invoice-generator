import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('clients', (table) => {
        table.uuid('id').defaultTo('gen_random_uuid()');
        table.uuid('user').notNullable();
        table.string('name', 100).notNullable();
        table.string('description', 400).nullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('clients');
}

