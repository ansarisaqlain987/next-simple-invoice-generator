export type EnvConfig = {
    DATABASE_URL: string
    DB_NAME: string
    DB_USER: string
    DB_PASS: string
    DB_HOST: string
    DB_PORT: number

    AUTH_ENDPOINT: string
    AUTH_APP_ID: string
    AUTHA_APP_SECRET: string
    COOKIE_SECRET: string

    APP_URL: string
    NODE_ENV: string
}