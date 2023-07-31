import { QueryClient } from 'react-query';
import { toast } from 'react-toastify';

function queryErrorHandler(error: unknown): void {
  const message =
    error instanceof Error ? error.message : 'error connecting to server';
  toast.clearWaitingQueue();
  toast.error(message);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      retry: 1,
      staleTime: 600000,
      cacheTime: 900000,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
    mutations: {
      onError: queryErrorHandler,
      retry: 1,
    },
  },
});
