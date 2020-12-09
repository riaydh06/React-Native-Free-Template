import React from 'react';
import {PagePrimary} from '../../../components/widget';
import {
  ButtonPrimary,
  InputPrimary,
  TextComponent,
} from '../../../components/ui';
import {strings} from '../../../locales/i18n';

const Login = () => {
  return (
    <PagePrimary>
      <TextComponent content="hello" />
      <TextComponent content={strings('LOGIN.Login.hello')} />
      <InputPrimary
        placeholder="jdkfjkdjkdf"
        value={''}
        onChangeText={() => {}}
      />
      <ButtonPrimary content="SIGN UP" onPress={() => {}} />
    </PagePrimary>
  );
};

export default Login;
