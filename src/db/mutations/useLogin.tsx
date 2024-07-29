import axios from "axios";
import { useMutation } from "./../index";
import { z } from 'zod';
import { LoginApiInput } from "@/zod-types";

const useLoginMutationFunction = async (inputs: z.infer<typeof LoginApiInput>) => {
    const data = await axios.post('https://logto.websofmine.com/auth/email/otp', {
        appId: '1lkbrh3lurnrr1ohih2kb',
        appSecret: 'HCE02smEBsA5lXAuyMIUJWp9vXs3AGBV',
        email: inputs.email
    });
    return data.data;
}
export const useLogin = () => {
    return useMutation<z.infer<typeof LoginApiInput>>({ mutationFn: useLoginMutationFunction, hideSuccess: true })
}