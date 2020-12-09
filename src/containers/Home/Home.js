import React from 'react';
import {ButtonPrimary, InputPrimary, TextComponent} from '../../components/ui';
import {PagePrimary} from '../../components/wedget';

const Home = () => {
  return (
    <PagePrimary>
      <TextComponent content="hello" />
      <InputPrimary placeholder="jdkfjkdjkdf" />
      <ButtonPrimary content="SIGN UP" onPress={() => {}} />
    </PagePrimary>
  );
};

export default Home;
