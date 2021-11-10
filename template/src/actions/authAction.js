import {axiosInstance} from '../config';
import {URLS} from '../constants/urls';
import {AUTH} from './types';

export const loginStart = () => ({
  type: AUTH.USER_LOGIN_START,
});

export const loginSuccess = () => ({
  type: AUTH.USER_LOGIN_SUCCESS,
});

export const loginAction = (postData) => (dispatch) => {
  dispatch(loginStart());
  return axiosInstance
    .get(URLS.LOGIN, postData)
    .then((response) => {
      dispatch(loginSuccess);
    })
    .catch((e) => {});
};

export const logoutStart = () => ({
  type: AUTH.USER_LOGOUT_START,
});

export const logoutSuccess = () => ({
  type: AUTH.USER_LOGOUT_SUCCESS,
});

export const logoutAction = (postData) => (dispatch) => {
  dispatch(logoutStart());
  return axiosInstance
    .get(URLS.LOGOUT, postData)
    .then((response) => {
      dispatch(logoutSuccess);
    })
    .catch((e) => {});
};
