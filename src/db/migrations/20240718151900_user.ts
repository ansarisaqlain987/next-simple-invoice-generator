import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('test_users', (table) => {
        table.increments('id');
        table.string('name', 100).notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
}

