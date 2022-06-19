import React, {FC, useEffect} from 'react';
import RootStack from '../routes';
import SplashScreen from 'react-native-splash-screen';

const Index: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <RootStack />;
};

export default Index;
