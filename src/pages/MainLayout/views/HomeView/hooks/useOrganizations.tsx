import { useQuery } from 'react-query';
import axiosInstance from '../../../../../axios-instance';
import { queryKeys } from '../../../../../react-query/constants';
import { Organization } from '../../../../../types';

interface IUseOrganization {
  data: Organization[];
  isLoading: boolean;
}

async function getOrganizations(): Promise<Organization[]> {
  const { data } = await axiosInstance.get('/organizations');
  return data.organizations;
}

export function useOrganizations(): IUseOrganization {
  const { data = [], isLoading } = useQuery(
    queryKeys.organization,
    getOrganizations,
  );
  return { data, isLoading };
}
