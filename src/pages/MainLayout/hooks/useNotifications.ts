import { useQuery, useQueryClient } from 'react-query'
import { axiosInstance } from '../../../axios-instance'
import { queryKeys } from '../../../react-query/constants'

interface Notifications {
  id: string
  title: string
  desc: string
}

async function getNotifications(): Promise<Notifications[]> {
  const { data } = await axiosInstance.get('/appointments')
  return data
}

export function useNotifications(): Notifications[] {
  const { data = [] } = useQuery(queryKeys.notifications, getNotifications)
  return data
}

export function usePrefetchNotification(): void {
  const queryClient = useQueryClient()
  queryClient.prefetchQuery(queryKeys.notifications, getNotifications)
}
