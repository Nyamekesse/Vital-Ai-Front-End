import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import axiosInstance from '../../../../../axios-instance';
import { SERVER_ERROR } from '../../../../../shared/constants';
import { queryKeys } from '../../../../../react-query/constants';

async function markNotificationRead(id: string | undefined) {
  try {
    await axiosInstance.put(`/notification/view/${id}`);
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

export function useNotificationUpdate() {
  const queryClient = useQueryClient();
  const { mutate: markAsRead } = useMutation(
    (id: string) => markNotificationRead(id),
    {
      onSuccess: async () => {
        queryClient.invalidateQueries([queryKeys.notifications]);
      },
    },
  );

  return { markAsRead };
}
