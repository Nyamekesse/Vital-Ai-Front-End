/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation } from 'react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../../../axios-instance';
import { SERVER_ERROR } from '../../../../../shared/constants';
import { queryClient } from '../../../../../react-query';
import { queryKeys } from '../../../../../react-query/constants';

async function registerProfileDetails(formData: any) {
  try {
    const { data } = await axiosInstance.post(
      '/register-new-profile',
      formData,
    );
    return data;
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

export function useRegisterProfileDetails() {
  const navigate = useNavigate();
  const { mutate } = useMutation(
    (formData: any) => registerProfileDetails(formData),
    {
      onSuccess: async (data) => {
        queryClient.invalidateQueries([queryKeys.user]);
        toast.success('User Profile updated successfully');
        sessionStorage.setItem('token', data.token);
        navigate('/', { replace: true });
      },
    },
  );

  return { mutate };
}
