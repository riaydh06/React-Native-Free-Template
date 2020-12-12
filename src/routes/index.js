import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../containers/Home/Home';
import Login from '../containers/Auth/Login/Login';
import Email from '../containers/Auth/Email/Email';
import OTP from '../containers/Auth/OTP/OTP';
import StepOne from '../containers/Auth/Steps/StepOne';
import StepTwo from '../containers/Auth/Steps/StepTwo';
import StepThree from '../containers/Auth/Steps/StepThree';
import StepFour from '../containers/Auth/Steps/StepFour';
import StepFive from '../containers/Auth/Steps/StepFive';
import Success from '../containers/Auth/Success/Success';

import {navigationOption} from '../constants/route';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: navigationOption(true, ''),
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
    StepOne: {
      screen: StepOne,
      navigationOptions: navigationOption(true, ''),
    },
    StepTwo: {
      screen: StepTwo,
      navigationOptions: navigationOption(true, ''),
    },
    StepThree: {
      screen: StepThree,
      navigationOptions: navigationOption(true, ''),
    },
    StepFour: {
      screen: StepFour,
      navigationOptions: navigationOption(true, ''),
    },
    StepFive: {
      screen: StepFive,
      navigationOptions: navigationOption(true, ''),
    },
    Success: {
      screen: Success,
      navigationOptions: navigationOption(false, ''),
    },
  },
  {
    initialRouteName: 'Login',
  },
);
export default createAppContainer(RootStack);
