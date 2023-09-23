import axios, { AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_REACT_APP_SERVER_URL_1,
  withCredentials: true,
};
const axiosInstance = axios.create(config);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.reload();
      toast.warning('Session expired please log in again');
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
