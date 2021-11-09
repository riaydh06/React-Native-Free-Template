import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Login from '../containers/Auth/Login/Login';

import {navigationOption} from '../constants/route';

const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: navigationOption(true, ''),
    },
  },
  {
    initialRouteName: 'Login',
  },
);
export default createAppContainer(RootStack);
