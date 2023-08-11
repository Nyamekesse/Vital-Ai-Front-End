import { useQuery } from 'react-query';
import { queryKeys } from '../../../../../react-query/constants';
import { getDirectHistory } from '../../../../../sockets/clientSocket';

export interface SingleChatDetails {
  _id: string;
  content: string;
  author: string;
  date: string;
}

interface UseMessagesById {
  messages: string[];
  participants: string[];
}

// const dummyChatDetails: SingleChatDetails[] = [
//   {
//     _id: 1,
//     content: 'hello',
//     sameAuthor: false,
//     author: {
//       username: 'Marek',
//     },
//     date: '22/01/2022',
//     sameDay: false,
//   },
//   {
//     _id: 2,
//     content: 'hello once again',
//     sameAuthor: true,
//     author: {
//       username: 'Marek',
//     },
//     date: '22/01/2022',
//     sameDay: true,
//   },
//   {
//     _id: 3,
//     content: 'hello third time',
//     sameAuthor: true,
//     author: {
//       username: 'Marek',
//     },
//     date: '23/01/2022',
//     sameDay: false,
//   },
//   {
//     _id: 4,
//     content: 'hello fourth time',
//     sameAuthor: false,
//     author: {
//       username: 'Marek',
//     },
//     date: '23/01/2022',
//     sameDay: false,
//   },
// ];

export function useGetChatById(id: string | undefined) {
  useQuery([queryKeys.chats, id], () => getDirectHistory(id));
  //   const unreadChats = countUnreadChats(chats);
}
