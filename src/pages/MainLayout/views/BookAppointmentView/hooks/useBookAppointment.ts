import axios from 'axios';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { SERVER_ERROR } from '../../../../../shared/constants';
import axiosInstance from '../../../../../axios-instance';
import { queryKeys } from '../../../../../react-query/constants';
import { queryClient } from '../../../../../react-query';

interface InputData {
  healthProfessionalID: string | undefined;
  scheduledTime: string;
  purpose: string;
}

async function addNewAppointment({
  healthProfessionalID,
  scheduledTime,
  purpose,
}: InputData) {
  try {
    const { data } = await axiosInstance.post('/new/appointment', {
      healthProfessionalID,
      scheduledTime,
      purpose,
    });
    return data.message;
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

export function useAddAppointment() {
  const { mutate } = useMutation((data: InputData) => addNewAppointment(data), {
    onSuccess: async () => {
      queryClient.invalidateQueries(queryKeys.appointments);
      toast.success('Appointment successfully booked');
    },
  });

  return { mutate };
}
