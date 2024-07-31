"use server"

import { logtoConfig } from "@/config/logto";
import { UserInfo } from "@/types";
import { getLogtoContext } from "@logto/next/server-actions";

export const getUserInfo = async (): Promise<UserInfo> => {
    const { claims } = await getLogtoContext(logtoConfig);
    return {
        email: claims?.email ?? '',
        id: claims?.sub ?? '',
        name: claims?.name ?? '',
        picture: claims?.picture ?? '',
    }
}