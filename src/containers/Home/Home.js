import React from 'react';
import {Text, View} from 'react-native';
import {ButtonPrimary, InputPrimary} from '../../components/ui';

const Home = () => {
  return (
    <View style={{flex: 1, paddingLeft: 15, paddingRight: 15}}>
      <Text>Hi</Text>
      <InputPrimary placeholder="jdkfjkdjkdf" />
      <ButtonPrimary content="SIGN UP" onPress={() => {}} />
    </View>
  );
};

export default Home;
