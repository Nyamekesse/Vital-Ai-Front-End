import axios from 'axios';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { SERVER_ERROR } from '../../../../../shared/constants';
import axiosInstance from '../../../../../axios-instance';
import { queryClient } from '../../../../../react-query';
import { queryKeys } from '../../../../../react-query/constants';
import { getUserDetails } from '../../../../LogIn/hooks/useUserInfo';

async function removeConnection(id: string) {
  try {
    await axiosInstance.delete(`/remove/connection/id=${id}`);
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

export const useRemoveConnection = () => {
  const { mutate } = useMutation((id: string) => removeConnection(id), {
    onSuccess: async () => {
      await getUserDetails();
      queryClient.invalidateQueries(queryKeys.connections);
      toast.success('Favorite removed');
    },
  });
  return { mutate };
};
