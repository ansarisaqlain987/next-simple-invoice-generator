import axios, { AxiosResponse } from 'axios';
import { useToast } from "@/components/ui/use-toast"
import { ApiResponse, Nullable } from '@/types';
import { QueryClient, UseMutationOptions, useMutation as useReactMutation } from "@tanstack/react-query"

export const getRequest = () => {
    return axios.get('/api/sample');
}

export const postRequest = () => {
    return axios.post('/api/login', { "somedata": 123, "email": "abc" });
}

type MutationOptions = {
    hideError?: boolean;
    hideSuccess?: boolean;
}
export const useMutation = <TVars=any,>(
    options: UseMutationOptions<any, any, TVars> & Nullable<MutationOptions>,
    queryClient?: QueryClient
)  => {
    const { toast } = useToast();
    const { mutationFn, hideError, hideSuccess, ...restOptions } = options;

    return useReactMutation({
        mutationFn: mutationFn,
        onError: (error: Error) => {
            if (!hideError) {
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: error.message
                })
            }
        },
        onSuccess: (data: AxiosResponse<ApiResponse, any>) => {
            if (!hideSuccess) {
                const resp = data.data;
                if (resp.code === 200 && (!resp.error || (resp.error && resp.error.length == 0))) {
                    toast({
                        title: "Success",
                        description: resp.message
                    })
                }else {
                    toast({
                        variant: "destructive",
                        title: "Error",
                        description: resp.message
                    })
                }
            }
        },
        ...restOptions
    }, queryClient)
}