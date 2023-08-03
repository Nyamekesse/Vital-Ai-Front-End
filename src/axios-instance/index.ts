import axios, { AxiosRequestConfig } from 'axios';

import { url } from '../shared/constants';

const config: AxiosRequestConfig = {
  baseURL: url,
  withCredentials: true,
};

const axiosInstance = axios.create(config);

export default axiosInstance;
