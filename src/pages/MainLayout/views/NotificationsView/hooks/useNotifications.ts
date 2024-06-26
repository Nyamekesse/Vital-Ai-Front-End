import { useQuery } from 'react-query';
import axiosInstance from '../../../../../axios-instance';
import { queryKeys } from '../../../../../react-query/constants';
import { Notification } from '../../../../../types';
import { countUnreadNotifications } from '../../../../../utils/calculateUnreadNotifications';
import { queryClient } from '../../../../../react-query';

interface UseNotification {
  notifications: Notification[];
  unreadNotification: number;
}

async function getNotifications(): Promise<Notification[]> {
  const { data } = await axiosInstance.get('/notifications');
  return data;
}

export function useNotifications(): UseNotification {
  const { data: notifications = [] } = useQuery(
    queryKeys.notifications,
    getNotifications,
  );
  const unreadNotification = countUnreadNotifications(notifications);
  return { notifications, unreadNotification };
}

export function usePrefetchNotification(): void {
  queryClient.prefetchQuery(queryKeys.notifications, getNotifications);
}
