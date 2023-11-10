import { useQuery } from 'react-query';
import axios from 'axios';
import { useState } from 'react';
import { queryKeys } from '../../../react-query/constants';
import axiosInstance from '../../../axios-instance';
import { SERVER_ERROR } from '../../../shared/constants';

export const getUserDetails = async () => {
  try {
    const { data } = await axiosInstance.get('/user/me');
    return data.user;
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
};

export const useUserInfo = () => {
  const [isLoggedIn] = useState(sessionStorage.getItem('isLoggedIn'));
  const { data } = useQuery(queryKeys.user, getUserDetails, {
    enabled: isLoggedIn === 'true',
  });
  return data;
};
