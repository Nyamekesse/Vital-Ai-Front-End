import { useQuery } from 'react-query';
import { queryKeys } from '../../../../../react-query/constants';
import { getDirectHistory } from '../../../../../sockets/clientSocket';

export function useGetChatById(id: string | undefined) {
  useQuery([queryKeys.chats, id], () => getDirectHistory(id));
  //   const unreadChats = countUnreadChats(chats);
}
