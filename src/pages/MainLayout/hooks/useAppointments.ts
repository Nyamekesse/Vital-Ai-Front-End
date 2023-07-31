import { useQuery, useQueryClient } from 'react-query';
import axiosInstance from '../../../axios-instance';
import { queryKeys } from '../../../react-query/constants';
import { Appointment } from '../../../types';

async function getTreatments(): Promise<Appointment[]> {
  const { data } = await axiosInstance.get('/appointments');
  return data;
}

export function useTreatments(): Appointment[] {
  const { data = [] } = useQuery(queryKeys.appointments, getTreatments);
  return data;
}

export function usePrefetchAppointment(): void {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery(queryKeys.appointments, getTreatments);
}
