import axios from 'axios';
import { useMutation } from 'react-query';
import { SERVER_ERROR } from '../../../../../shared/constants';

const url = import.meta.env.VITE_REACT_APP_SERVER_URL_2;

async function sendChat(query) {
  try {
    const { data } = await axios.post(`${url}/query-answer`, {
      query,
    });
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
