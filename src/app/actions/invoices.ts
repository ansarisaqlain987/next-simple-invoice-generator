"use server"
import { getUserInfo } from "./getUserInfo";
import { prisma } from "@/db";

export const getInvoices = async () => {
  const userInfo = await getUserInfo();
  try {
    const data = await prisma.invoice.findMany({
      where: { user: userInfo.email, deleted: false },
      include: {
        client: {
          select: {
            name: true,
            id: true,
          }
        },
        invoiceItems: {
          select: {
            title: true,
            id: true,
            amount: true
          }
        }
      }
    });
    return { data, error: null };
  } catch (err: Error | any) {
    return { data: null, error: { message: err?.message } };
  }
};
