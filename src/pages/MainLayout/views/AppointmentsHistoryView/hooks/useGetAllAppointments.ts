import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import axiosInstance from '../../../../../axios-instance';
import { queryKeys } from '../../../../../react-query/constants';
import { Appointment } from '../../../../../types';
import { SERVER_ERROR } from '../../../../../shared/constants';

async function getAllAppointments(): Promise<Appointment[]> {
  try {
    const { data } = await axiosInstance.get('/all/appointments');
    return data;
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

export function useGetAllAppointments(): Appointment[] {
  const { data: appointments = [] } = useQuery(
    queryKeys.appointments,
    getAllAppointments,
  );
  return appointments;
}

export function usePrefetchAllAppointment(): void {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery(queryKeys.appointments, getAllAppointments);
}
