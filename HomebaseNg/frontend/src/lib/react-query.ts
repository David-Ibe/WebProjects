import { QueryClient } from '@tanstack/react-query';
import { toast } from '@/components/ui/use-toast';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: (failureCount, error: any) => {
        // Don't retry on 404s or 401s
        if (error?.response?.status === 404 || error?.response?.status === 401) {
          return false;
        }
        // Retry 3 times on other errors
        return failureCount < 3;
      },
      onError: (error: any) => {
        // Only show error toast if it hasn't been handled by axios interceptor
        if (!error.isAxiosError) {
          toast({
            variant: 'destructive',
            title: 'Error',
            description: error.message || 'An unexpected error occurred',
          });
        }
      },
    },
    mutations: {
      onError: (error: any) => {
        // Only show error toast if it hasn't been handled by axios interceptor
        if (!error.isAxiosError) {
          toast({
            variant: 'destructive',
            title: 'Error',
            description: error.message || 'An unexpected error occurred',
          });
        }
      },
    },
  },
});
