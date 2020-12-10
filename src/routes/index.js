import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../containers/Home/Home';
import Login from '../containers/Auth/Login/Login';
import Email from '../containers/Auth/Email/Email';
import OTP from '../containers/Auth/OTP/OTP';
import {navigationOption} from '../constants/route';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: navigationOption(true, 'Login'),
    },
    Login: {
      screen: Login,
      navigationOptions: navigationOption(true, ''),
    },
    Email: {
      screen: Email,
      navigationOptions: navigationOption(true, ''),
    },
    OTP: {
      screen: OTP,
      navigationOptions: navigationOption(true, ''),
    },
  },
  {
    initialRouteName: 'Login',
  },
);
export default createAppContainer(RootStack);
