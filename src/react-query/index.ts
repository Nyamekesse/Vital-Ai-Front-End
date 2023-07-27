import { QueryClient } from 'react-query'
import { toast } from 'react-toastify'

function queryErrorHandler(error: unknown): void {
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  const title =
    error instanceof Error ? error.message : 'error connecting to server'

  // prevent duplicate toasts
  toast.clearWaitingQueue()
  //   call toast
  toast.error(title)
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
    },
    mutations: {
      onError: queryErrorHandler,
    },
  },
})
