import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_REACT_APP_SERVER_URL_1,
  withCredentials: true,
};
const axiosInstance = axios.create(config);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
