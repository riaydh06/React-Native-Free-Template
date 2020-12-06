import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/store';
import Index from './src/containers';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Index />
  </Provider>
);

export default App;
