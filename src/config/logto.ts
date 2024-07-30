import { EnvConfig } from '@/types';
import './../../envConfig';
import { LogtoNextConfig, UserScope } from "@logto/next";

const envVars: EnvConfig = process.env as any;
const {
    AUTH_ENDPOINT,
    AUTH_APP_ID,
    AUTHA_APP_SECRET,
    COOKIE_SECRET,
    APP_URL
} = envVars;


export const logtoConfig: LogtoNextConfig = {
  endpoint: AUTH_ENDPOINT,
  appId: AUTH_APP_ID,
  appSecret: AUTHA_APP_SECRET,
  baseUrl: APP_URL,
  cookieSecret: COOKIE_SECRET,
  cookieSecure: process.env.NODE_ENV === "production",
  scopes: [UserScope.Email]
};