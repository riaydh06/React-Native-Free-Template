import {AUTH} from '../actions/types';
import {getInitialState, getLoadingState} from '../utils/store';

const initialState = {
  login: getInitialState(),
  logout: getInitialState(),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.USER_LOGIN_START:
      return {
        ...state,
        login: getLoadingState(),
      };

    case AUTH.USER_LOGIN_SUCCESS:
      return {
        ...state,
        login: getLoadingState(),
      };

    case AUTH.USER_LOGOUT_START:
      return {
        ...state,
        logout: getLoadingState(),
      };

    case AUTH.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        logout: getLoadingState(),
      };
    default:
      return state;
  }
};

export default authReducer;
