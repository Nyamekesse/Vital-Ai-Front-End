import { useQuery } from 'react-query';
import axios from 'axios';
import axiosInstance from '../../../../../axios-instance';
import { queryKeys } from '../../../../../react-query/constants';
import { HealthProfessional } from '../../../../../types';
import { SERVER_ERROR } from '../../../../../shared/constants';

async function getOrganizationTeam(
  organizationId: string | undefined,
): Promise<HealthProfessional[]> {
  try {
    const { data } = await axiosInstance.get(
      `/organization/id=${organizationId}/staff`,
    );

    return data?.healthProfessional;
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

export function useOrganizationTeam(
  id: string | undefined,
): HealthProfessional[] {
  const { data = [] } = useQuery([queryKeys.organizationTeams, id], () =>
    getOrganizationTeam(id),
  );
  return data;
}
