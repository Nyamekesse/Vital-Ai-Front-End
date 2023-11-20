import { useQuery } from 'react-query';
import axios from 'axios';
import { useState } from 'react';
import { queryKeys } from '../../../react-query/constants';
import axiosInstance from '../../../axios-instance';
import { SERVER_ERROR } from '../../../shared/constants';
import { InfoResponse } from '../../../types';
import { parseJwt } from '../../../utils/extractUserType';

interface IUseUserInfo {
  data: InfoResponse;
  isLoading: boolean;
}

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

export function useUserInfo(): IUseUserInfo {
  const [isLoggedIn] = useState(sessionStorage.getItem('isLoggedIn'));
  const storedToken = sessionStorage.getItem('token');
  let profileCompleted = false;
  if (storedToken !== null) {
    profileCompleted = parseJwt(storedToken).profileCompleted === true;
  }
  const { data, isLoading } = useQuery(queryKeys.user, getUserDetails, {
    enabled: isLoggedIn === 'true' && profileCompleted,
  });
  return { data, isLoading };
}
