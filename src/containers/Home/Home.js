import React from 'react';
import {ButtonPrimary, InputPrimary, TextComponent} from '../../components/ui';
import {PagePrimary} from '../../components/widget';
import {strings} from '../../locales/i18n';

const Home = () => {
  return (
    <PagePrimary>
      <TextComponent content="hello" />
      <InputPrimary placeholder="jdkfjkdjkdf" onChangeText={() => {}} />
      <ButtonPrimary content="SIGN UP" disabled onPress={() => {}} />
    </PagePrimary>
  );
};

export default Home;
