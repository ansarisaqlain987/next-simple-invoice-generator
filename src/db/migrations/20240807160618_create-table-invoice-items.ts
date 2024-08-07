"use server";
import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("invoice_items", (table) => {
    table.uuid("id").defaultTo(knex.raw("gen_random_uuid()")).primary();
    table.string("user").notNullable();
    table.string("title", 100).notNullable();
    table.string("description", 400).defaultTo("");
    table.decimal("amount").notNullable();
    table.uuid("invoice_id").references("id").inTable("invoices");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("invoice_items");
}
