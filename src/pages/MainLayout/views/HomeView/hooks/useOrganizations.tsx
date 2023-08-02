import { useQuery } from 'react-query';
import axiosInstance from '../../../../../axios-instance';
import { queryKeys } from '../../../../../react-query/constants';
import { Organization } from '../../../../../types';

async function getOrganizations(): Promise<Organization[]> {
  const { data } = await axiosInstance.get('/organizations');

  return data.organizations;
}

export function useOrganizations(): Organization[] {
  const { data = [] } = useQuery(queryKeys.organization, getOrganizations);
  return data;
}
