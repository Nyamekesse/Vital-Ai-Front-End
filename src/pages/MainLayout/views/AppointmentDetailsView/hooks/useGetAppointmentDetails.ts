import { useQuery } from 'react-query';
import axios from 'axios';
import axiosInstance from '../../../../../axios-instance';
import { Appointment } from '../../../../../types';
import { queryKeys } from '../../../../../react-query/constants';
import { SERVER_ERROR } from '../../../../../shared/constants';

interface IUseAppointmentDetailsById {
  data: Appointment;
  isLoading: boolean;
}

async function fetchAppointmentDetailsById(id: string) {
  try {
    const { data } = await axiosInstance.get(`/appointment/${id}/details`);
    return data;
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

export function useGetAppointmentDetails(
  id: string,
): IUseAppointmentDetailsById {
  const { data, isLoading } = useQuery([queryKeys.appointments, id], () =>
    fetchAppointmentDetailsById(id),
  );
  return { data, isLoading };
}
