import { useQuery } from 'react-query';
import axiosInstance from '../../../../../axios-instance';
import { queryKeys } from '../../../../../react-query/constants';
import { Specialization } from '../../../../../types';

interface IUseSpecialization {
  data: Specialization[];
  isLoading: boolean;
}

async function getSpecializations(): Promise<Specialization[]> {
  const { data } = await axiosInstance.get('/all/specialization');

  return data;
}

export function useSpecialization(): IUseSpecialization {
  const { data = [], isLoading } = useQuery(
    queryKeys.specializations,
    getSpecializations,
  );
  return { data, isLoading };
}
