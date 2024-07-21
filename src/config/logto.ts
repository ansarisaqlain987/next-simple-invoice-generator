import { EnvConfig } from '@/types';
import './../../envConfig';

const envVars: EnvConfig = process.env as any;
const {
    AUTH_ENDPOINT,
    AUTH_APP_ID,
    AUTHA_APP_SECRET,
    COOKIE_SECRET,
    APP_URL
} = envVars;


export const logtoConfig = {
    endpoint: AUTH_ENDPOINT,
    appId: AUTH_APP_ID,
    appSecret: AUTHA_APP_SECRET,
    baseUrl: APP_URL, // Change to your own base URL
    cookieSecret: COOKIE_SECRET, // Auto-generated 32 digit secret
    cookieSecure: process.env.NODE_ENV === 'production',
};