"use server";

import { prisma } from "@/db";
import { getUserInfo } from "./getUserInfo";
import { PrismaClient } from "@prisma/client";

export const createOrUpdateClient = async (inputData: {
  id?: string | null;
  name: string;
  description: string;
}): Promise<{data: any, error: any}> => {
  const userInfo = await getUserInfo();
  let data = {};
  try {
    if (inputData.id) {
      data = await prisma.client.update({
        where: {
          id: inputData.id,
          user: userInfo.email,
        },
        data: {
          name: inputData.name,
          description: inputData.description,
        },
      });
    } else {
      data = await prisma.client.create({
        data: {
          name: inputData.name,
          description: inputData.description,
          user: userInfo.email,
        },
      });
    }
    return { data, error: null };
  } catch (err: Error | any) {
    return {
      data: null,
      error: {message: err.message},
    };
  }
};
