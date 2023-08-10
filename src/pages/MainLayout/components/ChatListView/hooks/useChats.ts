import { useQuery, useQueryClient } from 'react-query';
import axiosInstance from '../../../../../axios-instance';
import { queryKeys } from '../../../../../react-query/constants';
import { countUnreadChats } from '../../../../../utils/countUnreadChats';

interface SingleChatDetails {
  _id: number;
  content: string;
  sameAuthor: boolean;
  author: { username: string };
  date: string;
  sameDay: boolean;
}
interface Chats {
  chats: SingleChatDetails[];
}
interface UseChats {
  //   chats: Chats[];
  //   unreadChats: number;
  dummyChats: SingleChatDetails[][];
}

const dummyChats: SingleChatDetails[][] = [
  [
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
      content: 'hello response first time',
      sameAuthor: false,
      author: {
        username: 'John',
      },
      date: '23/01/2022',
      sameDay: true,
    },
    {
      _id: 5,
      content: 'hello response third time',
      sameAuthor: true,
      author: {
        username: 'John',
      },
      date: '24/01/2022',
      sameDay: false,
    },
  ],
  [
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
      content: 'hello response first time',
      sameAuthor: false,
      author: {
        username: 'John',
      },
      date: '23/01/2022',
      sameDay: true,
    },
    {
      _id: 5,
      content: 'hello response third time',
      sameAuthor: true,
      author: {
        username: 'John',
      },
      date: '24/01/2022',
      sameDay: false,
    },
  ],
  [
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
      content: 'hello response first time',
      sameAuthor: false,
      author: {
        username: 'John',
      },
      date: '23/01/2022',
      sameDay: true,
    },
    {
      _id: 5,
      content: 'hello response third time',
      sameAuthor: true,
      author: {
        username: 'John',
      },
      date: '24/01/2022',
      sameDay: false,
    },
  ],
];

async function getAllChats(): Promise<Chats[]> {
  const { data } = await axiosInstance.get('/chats');
  return data;
}

export function useChats(): UseChats {
  const { data: chats = [] } = useQuery(queryKeys.chats, getAllChats);
  //   const unreadChats = countUnreadChats(chats);
  return { dummyChats };
}
