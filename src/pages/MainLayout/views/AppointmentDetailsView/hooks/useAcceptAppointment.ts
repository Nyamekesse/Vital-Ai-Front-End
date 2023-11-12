import axios from 'axios';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import axiosInstance from '../../../../../axios-instance';
import { SERVER_ERROR } from '../../../../../shared/constants';
import { queryClient } from '../../../../../react-query';
import { queryKeys } from '../../../../../react-query/constants';

async function acceptAppointment(id: string | undefined) {
  try {
    await axiosInstance.put(`/appointment/${id}/details/accept`);
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

export function useAccept(id: string | undefined) {
  const { mutate: acceptMutate } = useMutation(() => acceptAppointment(id), {
    onSuccess: async () => {
      queryClient.invalidateQueries(queryKeys.appointments);
      toast.success('Appointment accepted');
    },
  });

  return { acceptMutate };
}
