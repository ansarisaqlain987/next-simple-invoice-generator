import { getClientById } from "@/app/actions/clients";
import { useQuery } from "@tanstack/react-query";

export const useGetClientsById = (id: string | null) => {
  return useQuery({
    queryKey: ["clients"],
    queryFn: async () => {
      if (!id) {
        return null;
      }
      const data = await getClientById(id);
      return data;
    },
  });
};
