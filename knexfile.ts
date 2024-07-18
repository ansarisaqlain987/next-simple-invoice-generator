import type { Knex } from "knex";
import './envConfig';
import path from "path";

const dbConfig = {
  dialect: 'postgres',
    client: 'postgres',
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) ?? 5432,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      ssl: false
    },
    migrations: { directory: path.join(__dirname, '/src/db/migrations') }
}

const config: { [key: string]: Knex.Config } = {
  development: dbConfig,
  staging: dbConfig,
  production: dbConfig
};

module.exports = config;
