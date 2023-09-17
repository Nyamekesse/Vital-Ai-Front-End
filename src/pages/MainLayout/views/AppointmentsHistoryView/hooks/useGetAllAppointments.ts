import { useQuery } from 'react-query';
import axios from 'axios';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import axiosInstance from '../../../../../axios-instance';
import { queryKeys } from '../../../../../react-query/constants';
import { Appointment } from '../../../../../types';
import { SERVER_ERROR } from '../../../../../shared/constants';
import { queryClient } from '../../../../../react-query';

interface UseAppointments {
  appointments: Appointment[];
  filter: string;
  setStatusFilter: Dispatch<SetStateAction<string>>;
}

function filterAppointments(
  appointments: Appointment[],
  status: string,
): Appointment[] {
  return appointments.filter(
    (appointment) => appointment.status.toLowerCase() === status,
  );
}

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

export function useGetAllAppointments(status: string): UseAppointments {
  const [filter, setStatusFilter] = useState('pending');
  const fallback = [];
  const selectFn = useCallback(
    (unfiltered: Appointment[]) =>
      filterAppointments(unfiltered, status?.toLowerCase()),
    [status],
  );
  const { data: appointments = fallback } = useQuery(
    queryKeys.appointments,
    getAllAppointments,
    {
      select: selectFn,
    },
  );
  return { appointments, setStatusFilter, filter };
}

export function usePrefetchAllAppointment(): void {
  queryClient.prefetchQuery(queryKeys.appointments, getAllAppointments);
}
