import { useQuery } from 'react-query';
import axios from 'axios';
import axiosInstance from '../../../../../axios-instance';
import {
  Appointment,
  CareRecipient,
  HealthProfessional,
} from '../../../../../types';
import { queryKeys } from '../../../../../react-query/constants';
import { SERVER_ERROR } from '../../../../../shared/constants';

interface AppointmentDetails {
  id: string;
  careRecipient: CareRecipient;
  scheduledTime: string;
  healthProfessional: HealthProfessional;
  purpose: string;
  status: string;
}

async function fetchAppointmentDetailsById(id: string): Promise<Appointment> {
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

export function useGetAppointmentDetails(id: string): Appointment | undefined {
  const { data: details } = useQuery([queryKeys.appointments, id], () =>
    fetchAppointmentDetailsById(id),
  );
  return details;
}
