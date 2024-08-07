"use server";
import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("invoices", (table) => {
    table.uuid("id").defaultTo(knex.raw("gen_random_uuid()")).primary();
    table.string("user").notNullable();
    table.string("title", 100).notNullable();
    table.string("description", 400).defaultTo("");
    table.uuid("client_id").references("id").inTable("clients");
    table.boolean("deleted").defaultTo(false);
    table.dateTime("created_at").defaultTo(knex.fn.now());
    table.dateTime("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("invoices");
}
