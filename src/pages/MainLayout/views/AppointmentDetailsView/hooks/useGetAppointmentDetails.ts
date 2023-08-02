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
  careRecipient: {
    firstName: string;
    lastName: string;
    gender: string;
  };
  scheduledTime: string;
  healthProfessional: {
    firstName: string;
    lastName: string;
    displayPicture: string;
    specialization: {
      name: string;
    };
    organization: {
      name: string;
    };
  };
  purpose: string;
}

async function fetchAppointmentDetailsById(
  id: string,
): Promise<AppointmentDetails> {
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
): AppointmentDetails | undefined {
  const { data: details } = useQuery([queryKeys.appointments, id], () =>
    fetchAppointmentDetailsById(id),
  );
  return details;
}
