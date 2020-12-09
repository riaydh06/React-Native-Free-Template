import React from 'react';
import {PagePrimary} from '../../../components/widget';
import {
  ButtonPrimary,
  InputPrimary,
  TextComponent,
} from '../../../components/ui';

const Login = () => {
  return (
    <PagePrimary>
      <TextComponent content="hello" />
      <InputPrimary placeholder="jdkfjkdjkdf" value={''} />
      <ButtonPrimary content="SIGN UP" onPress={() => {}} />
    </PagePrimary>
  );
};

export default Login;
