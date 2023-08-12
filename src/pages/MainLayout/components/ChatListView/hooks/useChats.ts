import { useQuery } from 'react-query';
import axiosInstance from '../../../../../axios-instance';
import { queryKeys } from '../../../../../react-query/constants';
import { CareRecipient, HealthProfessional } from '../../../../../types';

interface ConversationResponse {
  participant: CareRecipient[] | HealthProfessional[];
}

interface UseChats {
  chats: ConversationResponse[];
  //   unreadChats: number;
}

async function getAllChats(): Promise<ConversationResponse[]> {
  const { data } = await axiosInstance.get('/chats');
  return data;
}

export function useChats(): UseChats {
  const { data: chats = [] } = useQuery(queryKeys.chats, getAllChats);
  //   const unreadChats = countUnreadChats(chats);
  return { chats };
}
