"use server"
import { logtoConfig } from "@/config/logto"
import { signOut } from "@logto/next/server-actions"

export const signOutAction = async (redirectUrl?: string) => {
    await signOut(logtoConfig, redirectUrl);
}