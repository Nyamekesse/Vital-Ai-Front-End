import axios from 'axios';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../axios-instance';
import { setStoredUser } from '../../../user-storage';
import { SERVER_ERROR } from '../../../shared/constants';
import { queryClient } from '../../../react-query';
import { queryKeys } from '../../../react-query/constants';
import { getUserDetails } from './useUserInfo';

interface FormData {
  email: string;
  password: string;
}

async function signin({ email, password }: FormData) {
  try {
    const { data } = await axiosInstance.post('/auth/login', {
      email,
      password,
    });
    return data.message;
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

// async function getUserDetail() {
//   try {
//     const { data } = await axiosInstance.get('/user/me');
//     setStoredUser(data.user);
//   } catch (error) {
//     const message =
//       axios.isAxiosError(error) && error?.response?.data?.message
//         ? error?.response?.data?.message
//         : SERVER_ERROR;
//     throw new Error(message);
//   }
// }

export function useAuthLogin() {
  const navigate = useNavigate();
  const { mutate } = useMutation((data: FormData) => signin(data), {
    onSuccess: async () => {
      // await getUserDetail();
      queryClient.prefetchQuery(queryKeys.user, getUserDetails);
      // await queryClient.invalidateQueries(queryKeys.user);
      toast.success('Login Successful');
      navigate('/', { replace: true });
    },
  });

  return { mutate };
}
