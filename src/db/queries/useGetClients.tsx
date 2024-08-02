import { getClients } from "@/app/actions/clients";
import { useQuery } from "@tanstack/react-query";

export const useGetClients = () => {
  return useQuery({
    queryKey: ["clients"],
    queryFn: async () => {
      const data = await getClients();
      return data;
    },
  });
};
