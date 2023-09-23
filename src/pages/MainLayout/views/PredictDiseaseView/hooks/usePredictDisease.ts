/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation } from 'react-query';
import axios from 'axios';
import { SERVER_ERROR } from '../../../../../shared/constants';

async function updateProfileDetails(formData: any) {
  try {
    const { data } = await axios.post(
      'http://127.0.0.1:8005/api/predict-disease',
      formData,
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

export function usePredict() {
  const { mutate, data } = useMutation((formData: any) =>
    updateProfileDetails(formData),
  );

  return { mutate, data };
}
