"use server";

import { prisma } from "@/db";
import { DbActionResponse } from "@/types";
import { getUserInfo } from "./getUserInfo";

export const getClients = async (): Promise<DbActionResponse> => {
  const userInfo = await getUserInfo();
  try {
    const data = await prisma.client.findMany({where: {user: userInfo.email}});
    return { data, error: null };
  } catch (err: Error | any) {
    return { data: null, error: {message: err?.message} };
  }
};
