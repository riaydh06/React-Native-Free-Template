import React from 'react';
import RootStack from './src/routes';
import {Provider} from 'react-redux';
import configureStore from './src/store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
);

export default App;
