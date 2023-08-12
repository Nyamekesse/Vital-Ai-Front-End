import axios, { AxiosRequestConfig } from 'axios';
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
      toast.warning('Session expired please log in again');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
