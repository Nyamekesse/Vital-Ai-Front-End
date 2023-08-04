import { useQuery } from 'react-query';
import axiosInstance from '../../../../../axios-instance';
import { queryKeys } from '../../../../../react-query/constants';
import { HealthProfessional } from '../../../../../types';

async function getOrganizationTeam(id: string): Promise<HealthProfessional[]> {
  const { data } = await axiosInstance.get(`/organization/id=${id}/staff`);

  return data.healthProfessional;
}

export function useOrganizationTeam(id: string): HealthProfessional[] {
  const { data = [] } = useQuery(queryKeys.organizationTeams, () =>
    getOrganizationTeam(id),
  );
  return data;
}
