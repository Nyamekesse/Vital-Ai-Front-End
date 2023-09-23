/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation } from 'react-query';
import axios from 'axios';
import { SERVER_ERROR } from '../../../../../shared/constants';

const url = import.meta.env.VITE_REACT_APP_SERVER_URL_2;

async function updateProfileDetails(formData: any) {
  try {
    const { data } = await axios.post(`${url}/recommend-drug`, formData);
    return data.result;
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

export function useRecommend() {
  const { mutate, data } = useMutation((formData: any) =>
    updateProfileDetails(formData),
  );

  return { mutate, data };
}
