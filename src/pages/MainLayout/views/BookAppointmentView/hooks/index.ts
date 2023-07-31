import { useQuery } from 'react-query';
import { queryKeys } from '../../../../../react-query/constants';
import axiosInstance from '../../../../../axios-instance';
import { Gender } from '../../../../../types';

interface HealthProfessionalDetails {
  firstName: string;
  lastName: string;
  contactInfo: string;
  gender: Gender;
  displayPicture?: string;
  organization: {
    name: string;
  };
  specialization: {
    name: string;
  };
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
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Error contacting the server');
    }
  }
}

export function useHealthProfessionalDetails(id: string) {
  const { data: details } = useQuery([queryKeys.healthProfessional, id], () =>
    fetchHealthProfessionalDetailsById(id),
  );
  return details;
}
