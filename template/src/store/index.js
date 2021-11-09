import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import appReducer from '../reducers';

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(ReduxThunk));
};

export default configureStore;
