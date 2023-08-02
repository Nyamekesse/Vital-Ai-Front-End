import { useQuery } from 'react-query';
import axios from 'axios';
import { queryKeys } from '../../../../../react-query/constants';
import axiosInstance from '../../../../../axios-instance';
import {
  Connection,
  Gender,
  Organization,
  Review,
  Specialization,
} from '../../../../../types';
import { SERVER_ERROR } from '../../../../../shared/constants';

interface HealthProfessionalDetails {
  firstName: string;
  lastName: string;
  contactInfo: string;
  experience: number;
  gender: Gender;
  displayPicture: string;
  about: string;
  organization: Organization;
  specialization: Specialization;
  Review: Review[];
  Connection: Connection[];
}

async function fetchHealthProfessionalDetailsById(
  id: string,
): Promise<HealthProfessionalDetails> {
  try {
    const { data } = await axiosInstance.get(
      `/details/health-professional/id=${id}`,
    );
    return data;
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

export function useHealthProfessionalDetails(id: string) {
  const { data: details } = useQuery([queryKeys.healthProfessional, id], () =>
    fetchHealthProfessionalDetailsById(id),
  );
  return details;
}
