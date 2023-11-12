import { useQuery } from 'react-query';
import axios from 'axios';
import { queryKeys } from '../../../../../react-query/constants';
import axiosInstance from '../../../../../axios-instance';
import { HealthProfessional } from '../../../../../types';
import { SERVER_ERROR } from '../../../../../shared/constants';

interface IUseHealthProfessionalDetailsById {
  data: HealthProfessional;
  isLoading: boolean;
}
async function fetchHealthProfessionalDetailsById(id: string | undefined) {
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

export function useHealthProfessionalDetails(
  id: string | undefined,
): IUseHealthProfessionalDetailsById {
  const { data, isLoading } = useQuery([queryKeys.healthProfessional, id], () =>
    fetchHealthProfessionalDetailsById(id),
  );
  return { data, isLoading };
}
