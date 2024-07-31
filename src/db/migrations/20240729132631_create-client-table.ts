"use server"
import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('clients', (table) => {
        table.uuid("id").defaultTo(knex.raw("gen_random_uuid()"));
        table.string('user').notNullable();
        table.string('name', 100).notNullable();
        table.string('description', 400).defaultTo('');
        table.dateTime('created_at').defaultTo(knex.fn.now());
        table.dateTime('updated_at').defaultTo(knex.fn.now());
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('clients');
}

