import axios from 'axios';

const DEV_URLS = {
  backEndUrl: 'http://dev/',
};

const STAGING_URLS = {
  backEndUrl: 'https://staging/',
};

const PRODUCTION_URLS = {
  backEndUrl: 'https://backend/',
};

export const ACTIVE_URLS = DEV_URLS; // Change this line for production and staging.

export const axiosInstance = axios.create({
  baseURL: ACTIVE_URLS.backEndUrl,
  timeout: 30000,
  headers: {},
});

// axiosInstance.defaults.headers.common.Authorization = 'Token eyJ0eX....';

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);
