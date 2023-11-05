import { useQuery } from 'react-query';
import axiosInstance from '../../../../../axios-instance';
import { queryKeys } from '../../../../../react-query/constants';
import { Connection } from '../../../../../types';

interface IUseConnection {
  data: Connection[];
  isLoading: boolean;
}

async function getConnections(): Promise<Connection[]> {
  const { data: connections } = await axiosInstance.get('/connections');

  return connections;
}

export function useConnections(): IUseConnection {
  const { data = [], isLoading } = useQuery(
    queryKeys.connections,
    getConnections,
  );
  return { data, isLoading };
}
