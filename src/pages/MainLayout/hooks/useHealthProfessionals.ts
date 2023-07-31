import { useQuery } from 'react-query';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { HealthProfessionalResponse } from '../../../types';
import { queryKeys } from '../../../react-query/constants';
import axiosInstance from '../../../axios-instance';

function filterHealthProfessionals(
  staff: HealthProfessionalResponse[],
  sortFilter: string,
): HealthProfessionalResponse[] {
  return staff.filter(
    (person) =>
      person.organizationID === sortFilter ||
      person.specialization.name === sortFilter,
  );
}

interface UseHealthProfessional {
  healthProfessionals: HealthProfessionalResponse[];
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

async function getOrganizations(): Promise<HealthProfessionalResponse[]> {
  const { data } = await axiosInstance.get('/health-professionals');
  return data;
}

export function useHealthProfessionals(
  sortFilter: string,
): UseHealthProfessional {
  const [filter, setFilter] = useState('all');
  const fallback = [];
  const selectFn = useCallback(
    (unfiltered: HealthProfessionalResponse[]) =>
      filterHealthProfessionals(unfiltered, sortFilter),
    [sortFilter],
  );
  const { data: healthProfessionals = fallback } = useQuery(
    queryKeys.healthProfessional,
    getOrganizations,
    {
      select: filter !== 'all' ? selectFn : undefined,
    },
  );
  return { healthProfessionals, setFilter, filter };
}
