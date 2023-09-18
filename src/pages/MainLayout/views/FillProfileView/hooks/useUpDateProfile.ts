/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation } from 'react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import axiosInstance from '../../../../../axios-instance';
import { SERVER_ERROR } from '../../../../../shared/constants';
import { queryClient } from '../../../../../react-query';
import { queryKeys } from '../../../../../react-query/constants';

async function updateProfileDetails(formData: any) {
  try {
    await axiosInstance.patch('/user/profile', formData);
    return true;
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

export function useUpdateProfileDetails() {
  const { mutate } = useMutation(
    (formData: any) => updateProfileDetails(formData),
    {
      onSuccess: async () => {
        queryClient.invalidateQueries([queryKeys.user]);
        queryClient.invalidateQueries([queryKeys.organizationTeams]);
        toast.success('User Profile updated successfully');
      },
    },
  );

  return { mutate };
}
