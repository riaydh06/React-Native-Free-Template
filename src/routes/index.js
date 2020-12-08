import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../containers/Home/Home';
import {colors, fonts} from '../styles/baseStyle';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        // headerShown: false,
        title: 'fkdjkfd',
        headerBackTitle: null,
        headerStyle: {
          backgroundColor: colors.error,
        },
        headerTitleStyle: {
          fontFamily: fonts.extraLightItalic,
          fontSize: 20,
          color: colors.dark,
        },
      }),
    },
  },
  {
    initialRouteName: 'Home',
  },
);
export default createAppContainer(RootStack);
