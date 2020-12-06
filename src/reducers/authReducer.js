import {AUTH} from '../actions/types';

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.USER_LOGOUT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default authReducer;
