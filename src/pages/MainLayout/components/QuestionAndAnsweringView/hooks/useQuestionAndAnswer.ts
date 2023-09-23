import axios from 'axios';
import { useMutation } from 'react-query';
import axiosInstance from '../../../../../axios-instance';
import { SERVER_ERROR } from '../../../../../shared/constants';

async function sendChat(query) {
  try {
    const { data } = await axios.post(
      'http://127.0.0.1:8005/api/query-answer',
      {
        query,
      },
    );
    return data.result;
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

export function useSubmitQuery() {
  const { isLoading, isError, error, data, mutate } = useMutation(
    (chat: string) => sendChat(chat),
  );

  return { isLoading, isError, error, data, mutate };
}
