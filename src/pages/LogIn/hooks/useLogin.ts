import axios from 'axios';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import axiosInstance from '../../../axios-instance';
import { SERVER_ERROR } from '../../../shared/constants';
import { AuthContext } from '../../../AuthContext';

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
    return { message: data.message, token: data.token };
  } catch (error) {
    const message =
      axios.isAxiosError(error) && error?.response?.data?.message
        ? error?.response?.data?.message
        : SERVER_ERROR;
    throw new Error(message);
  }
}

export function useAuthLogin() {
  const navigate = useNavigate();
  const { setLogin, setToken } = useContext(AuthContext);
  const { mutate } = useMutation((data: FormData) => signin(data), {
    onSuccess: async (data) => {
      setLogin(true);
      setToken(data.token);
      navigate('/', { replace: true });
      toast.success('Login Successful');
    },
  });

  return { mutate };
}
