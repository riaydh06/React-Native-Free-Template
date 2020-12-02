import axios from 'axios';
// import { store } from './redux/store/configureStore';

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

// axiosInstance.defaults.headers.common.Authorization = 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9....';

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // store.dispatch({
      //   type: 'auth_logout',
      // });
    }

    if (!error.response) {
      error.response = {
        data: {
          error_code: 'CNP',
        },
      };
    }
    return Promise.reject(error);
  },
);
