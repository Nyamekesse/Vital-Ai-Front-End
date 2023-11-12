import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import axios from 'axios';
import axiosInstance from '../../../../../axios-instance';
import { SERVER_ERROR } from '../../../../../shared/constants';
import { queryKeys } from '../../../../../react-query/constants';
import { queryClient } from '../../../../../react-query';

async function addHealthProfessional(id: string | undefined) {
  try {
    await axiosInstance.post(`/new/connection/id=${id}`);
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

export function useAddHealthProfessional() {
  const { mutate } = useMutation(
    (id: string | undefined) => addHealthProfessional(id),
    {
      onSuccess: async () => {
        queryClient.invalidateQueries([queryKeys.connections]);
        toast.success('Added Successfully');
      },
    },
  );

  return { mutate };
}
