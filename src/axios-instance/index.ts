import axios, { AxiosRequestConfig } from 'axios';
import { redirect } from 'react-router-dom';
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
    if (error.response && error.response.status === 401) {
      toast.error('Session has expired. Please log in again.');
      return redirect('/log-in');
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
