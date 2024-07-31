"use server";

import { prisma } from "@/db";
import { getUserInfo } from "./getUserInfo";
import { PrismaClient } from "@prisma/client";

export const createOrUpdateClient = async (inputData: {
  id?: string | null;
  name: string;
  description: string;
}) => {
  console.log("input: ", inputData);
  const userInfo = await getUserInfo();
  try {
    // if (inputData.id) {
      return await prisma.client.update({
        where: {
          id: "160bd051-7209-4c32-939a-821f72131acf",
          user: "test",
        },
        data: {
          name: inputData.name,
          description: inputData.description,
        },
      });
    // }
    return await prisma.client.create({
      data: {
        id: "160bd051-7209-4c32-939a-821f72131acf",
        name: "TEST", //inputData.name,
        description: "TEST",
        user: "TEST",
      },
    });
  } catch (err: Error | any) {
    console.log(err)
    return {
        message: err.message,
    }
  }
};
