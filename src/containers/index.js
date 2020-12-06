import React, {useEffect} from 'react';
import RootStack from '../routes';
import SplashScreen from 'react-native-splash-screen';

const Index = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <RootStack />;
};

export default Index;
