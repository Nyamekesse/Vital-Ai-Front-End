import axios, { AxiosRequestConfig } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { url } from '../shared/constants';

const config: AxiosRequestConfig = {
  baseURL: url,
  withCredentials: true,
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      const navigate = useNavigate();
      navigate('/log-in');
      toast.warning('Session expired please log in again');
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
