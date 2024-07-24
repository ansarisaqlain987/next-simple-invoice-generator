import axios from "axios";
import { postRequest, useMutation } from "./../index";
import { z } from 'zod';
import { LoginApiInput } from "@/zod-types";

const useLoginMutationFunction = async (inputs: z.infer<typeof LoginApiInput>) => {
    return await axios.post('/api/login', inputs);
}
export const useLogin = () => {
    return useMutation<z.infer<typeof LoginApiInput>>({mutationFn: useLoginMutationFunction})
}