import { useMutation } from "@tanstack/react-query";
import { createOrUpdateClient } from "@/app/actions/createOrUpdateClient";


export const useCreateOrUpdateClient = () => {
    return useMutation({
      mutationKey: ["createOrUpdateCarrier"],
      mutationFn: createOrUpdateClient,
    });
}