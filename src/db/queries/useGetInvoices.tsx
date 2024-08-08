import { getInvoices } from "@/app/actions/invoices";
import { useQuery } from "@tanstack/react-query";

export const useGetInvoices = () => {
  return useQuery({
    queryKey: ["invoices"],
    queryFn: async () => {
      const data = await getInvoices();
      return data;
    },
  });
};
