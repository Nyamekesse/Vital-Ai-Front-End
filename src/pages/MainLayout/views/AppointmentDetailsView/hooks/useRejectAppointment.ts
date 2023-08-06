import axios from 'axios';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import axiosInstance from '../../../../../axios-instance';
import { SERVER_ERROR } from '../../../../../shared/constants';

async function rejectAppointment(id: string | undefined) {
  try {
    await axiosInstance.put(`/appointment/${id}/details/reject`);
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

export function useReject(id: string | undefined) {
  const { mutate: rejectMutate } = useMutation(() => rejectAppointment(id), {
    onSuccess: async () => {
      toast.success('Appointment rejected');
    },
  });

  return { rejectMutate };
}
