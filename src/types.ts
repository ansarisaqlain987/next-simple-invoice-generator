export type Nullable<T> = T | null | undefined;
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

export type ApiResponse = {
    error?: any[];
    data: any;
    message: string;
    code: number;
}

export type UserInfo = {
    email: string;
    id: string;
    name: string;
    picture: string;
}

export type DbActionResponse = {
    data: any;
    error: any;
}