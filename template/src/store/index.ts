import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import appReducer from '../reducers';

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(ReduxThunk));
};

export default configureStore;
