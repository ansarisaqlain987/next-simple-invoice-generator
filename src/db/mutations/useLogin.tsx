import axios from "axios";
import { useMutation } from "./../index";
import { z } from 'zod';
import { LoginApiInput } from "@/zod-types";

const useLoginMutationFunction = async (inputs: z.infer<typeof LoginApiInput>) => {
    const data = await axios.post('/api/login', inputs);
    return data.data;
}
export const useLogin = () => {
    return useMutation<z.infer<typeof LoginApiInput>>({mutationFn: useLoginMutationFunction, hideSuccess: true, hideError: true})
}