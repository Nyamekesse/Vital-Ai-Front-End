import { useQuery, useQueryClient } from 'react-query';
import axiosInstance from '../../../../../axios-instance';
import { queryKeys } from '../../../../../react-query/constants';
import { countUnreadChats } from '../../../../../utils/countUnreadChats';

interface Chats {
  text: string;
}

interface UseChats {
  chats: Chats[];
  //   unreadChats: number;
  dummyChats: Chats[];
}

const dummyChats: Chats[] = [
  { text: 'hi' },
  { text: 'hi' },
  { text: 'hi' },
  { text: 'hi' },
];

async function getAllChats(): Promise<Chats[]> {
  const { data } = await axiosInstance.get('/chats');
  return data;
}

export function useChats(): UseChats {
  const { data: chats = [] } = useQuery(queryKeys.chats, getAllChats);
  //   const unreadChats = countUnreadChats(chats);
  return { chats, dummyChats };
}

export function usePrefetchChats(): void {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery(queryKeys.chats, getAllChats);
}
