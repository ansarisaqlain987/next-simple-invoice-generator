import { createOrUpdateClient } from "@/app/actions/clients";
import { useMutation } from "@tanstack/react-query";

export const useCreateOrUpdateClient = () => {
  return useMutation({
    mutationKey: ["createOrUpdateCarrier"],
    mutationFn: createOrUpdateClient,
  });
};
