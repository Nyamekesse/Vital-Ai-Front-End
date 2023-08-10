import { useQuery } from 'react-query';
import { queryKeys } from '../../../../../react-query/constants';
import axiosInstance from '../../../../../axios-instance';

export interface SingleChatDetails {
  _id: number;
  content: string;
  sameAuthor: boolean;
  author: { username: string };
  date: string;
  sameDay: boolean;
}

const dummyChatDetails: SingleChatDetails[] = [
  {
    _id: 1,
    content: 'hello',
    sameAuthor: false,
    author: {
      username: 'Marek',
    },
    date: '22/01/2022',
    sameDay: false,
  },
  {
    _id: 2,
    content: 'hello once again',
    sameAuthor: true,
    author: {
      username: 'Marek',
    },
    date: '22/01/2022',
    sameDay: true,
  },
  {
    _id: 3,
    content: 'hello third time',
    sameAuthor: true,
    author: {
      username: 'Marek',
    },
    date: '23/01/2022',
    sameDay: false,
  },
  {
    _id: 4,
    content: 'hello fourth time',
    sameAuthor: false,
    author: {
      username: 'Marek',
    },
    date: '23/01/2022',
    sameDay: false,
  },
];

async function getChatsById(id: string): Promise<SingleChatDetails[]> {
  await axiosInstance.get(`/chat/${id}/details`);
  return dummyChatDetails;
}

export function useGetChatById(id: string): SingleChatDetails[] | undefined {
  const { data: chatDetails = dummyChatDetails } = useQuery(
    [queryKeys.chats, id],
    () => getChatsById(id),
  );
  //   const unreadChats = countUnreadChats(chats);
  return chatDetails;
}
