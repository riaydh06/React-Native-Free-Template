import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {PagePrimary} from '../../components/widget';
import {ButtonSecondary, TextComponent} from '../../components/ui';
import {assets} from '../../assets';
import {mb20, mb30} from '../../styles/commonStyle';
import {fonts, sizes, weights} from '../../styles/baseStyle';

const Login = ({navigation}) => {
  return (
    <PagePrimary style={styles.wrapper}>
      <TextComponent
        i18n="SCREEN.WELCOME.TITLE"
        family={fonts.semiBold}
        size={sizes.fs28}
        weight={weights.fw600}
      />
      <Image source={assets.Logo02} style={mb30} />

      <ButtonSecondary
        style={mb20}
        content="BUTTON.TRAINER"
        onPress={() => navigation.navigate('Login')}
      />
      <ButtonSecondary
        style={mb20}
        content="BUTTON.TRAINEE"
        onPress={() => navigation.navigate('Login')}
      />
    </PagePrimary>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
  },
});

export default Login;
