"use server";

import { prisma } from "@/db";
import { DbActionResponse } from "@/types";
import { getUserInfo } from "./getUserInfo";

export const getClients = async (): Promise<DbActionResponse> => {
  const userInfo = await getUserInfo();
  try {
    const data = await prisma.client.findMany({
      where: { user: userInfo.email },
    });
    return { data, error: null };
  } catch (err: Error | any) {
    return { data: null, error: { message: err?.message } };
  }
};

export const getClientById = async (id: string): Promise<DbActionResponse> => {
  const userInfo = await getUserInfo();
  try {
    const data = await prisma.client.findFirst({
      where: { user: userInfo.email, id },
    });
    return { data, error: null };
  } catch (err: Error | any) {
    return { data: null, error: { message: err?.message } };
  }
};

export const createOrUpdateClient = async (inputData: {
  id?: string | null;
  name: string;
  description: string;
}): Promise<DbActionResponse> => {
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
      error: { message: err.message },
    };
  }
};

export const deleteClient = async (id: string): Promise<DbActionResponse> => {
  const userInfo = await getUserInfo();
  try {
    const data = await prisma.client.delete({
      where: {
        id,
        user: userInfo.email,
      },
    });
    return { data, error: null };
  } catch (err: Error | any) {
    return { data: null, error: { message: err?.message } };
  }
};
