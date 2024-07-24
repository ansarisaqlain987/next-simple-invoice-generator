import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import { getRequest } from '..'

export const useGetData = () => {
    return useQuery({queryKey: ['test'], queryFn: async () => {
        const data = await getRequest();
        return data.data;
    }})
}