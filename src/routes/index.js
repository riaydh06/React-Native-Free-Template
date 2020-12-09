import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../containers/Home/Home';
import {colors, fonts, sizes} from '../styles/baseStyle';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        // headerShown: false,
        title: 'fkdjkfd',
        headerTintColor: colors.error,
        headerBackTitle: null,
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          fontFamily: fonts.regular,
          fontSize: sizes.fs20,
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
