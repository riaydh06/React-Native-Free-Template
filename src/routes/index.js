import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../containers/Home/Home';
import Login from '../containers/Auth/Login/Login';
import {navigationOption} from '../constants/route';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: navigationOption(true, 'Login'),
    },
    Login: {
      screen: Login,
      navigationOptions: navigationOption(true, 'Login'),
    },
  },
  {
    initialRouteName: 'Login',
  },
);
export default createAppContainer(RootStack);
