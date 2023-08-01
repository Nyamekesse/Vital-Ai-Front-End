import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import axiosInstance from '../../../../../axios-instance';
import { SERVER_ERROR } from '../../../../../shared/constants';
import { queryKeys } from '../../../../../react-query/constants';

async function addHealthProfessional(id: string) {
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

export function useAddHealthProfessional(id: string) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation((id: string) => addHealthProfessional(id), {
    onSuccess: async () => {
      queryClient.invalidateQueries([queryKeys.healthProfessional, id]);
      toast.success('Added Successfully');
    },
  });

  return { mutate };
}
