"use server"
import { logtoConfig } from "@/config/logto"
import { signIn } from "@logto/next/server-actions"

export const signInAction = async () => {
    await signIn(logtoConfig);
}