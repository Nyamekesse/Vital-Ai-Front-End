/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from 'react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import axiosInstance from '../../../../../axios-instance';
import { SERVER_ERROR } from '../../../../../shared/constants';

async function uploadImageFile(imageFile: any) {
  try {
    const { data } = await axiosInstance.post('/user/image-upload', imageFile);
    return data;
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

export function useImageFileUpload() {
  const { mutate, data } = useMutation(
    (imageFile: any) => uploadImageFile(imageFile),
    {
      onSuccess: async (data) => {
        toast.success(data.message);
      },
    },
  );
  return { mutate, data };
}
