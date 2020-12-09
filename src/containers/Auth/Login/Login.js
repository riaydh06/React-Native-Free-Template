import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {PagePrimary} from '../../../components/widget';
import {
  ButtonPrimary,
  InputPrimary,
  TextComponent,
} from '../../../components/ui';
import {assets} from '../../../assets';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <PagePrimary>
      <Image source={assets.Logo02} />
      <TextComponent i18n="LOGIN.TITLE" />
      <InputPrimary
        placeholder="PLACEHOLDER.EMAIL"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <InputPrimary
        placeholder="PLACEHOLDER.PASSWORD"
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <ButtonPrimary content="BUTTON.SIGN_IN" onPress={() => {}} />
      <TextComponent i18n="LOGIN.FORGOT_PASSWORD" />
    </PagePrimary>
  );
};

export default Login;
