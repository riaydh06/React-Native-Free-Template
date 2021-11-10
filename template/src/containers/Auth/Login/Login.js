import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {PagePrimary, TextComponent} from '@components';
import {ButtonPrimary, InputPrimary} from '@components';
import {assets} from '@assets';
import {fonts} from '@baseStyle';
import {mb15, mb30, mb40, mr15} from '@commonStyle';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <PagePrimary>
      <TextComponent i18n="SCREEN.LOGIN.TITLE" styles={mb15} />
      <InputPrimary
        placeholder="PLACEHOLDER.EMAIL"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={mb15}
      />
      <InputPrimary
        placeholder="PLACEHOLDER.PASSWORD"
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        style={mb15}
      />
      <ButtonPrimary
        style={mb15}
        content="BUTTON.SIGN_IN"
        onPress={() => navigation.navigate('Home')}
      />

      <TextComponent i18n="SCREEN.LOGIN.FORGOT_PASSWORD" styles={mb30} />
      <TextComponent i18n="SCREEN.LOGIN.OR" styles={mb40} />

      <View style={styles.elementWrapper}>
        <Image source={assets.Facebook} style={mr15} />
        <Image source={assets.Twitter} style={mr15} />
        <Image source={assets.GooglePlus} />
      </View>

      <View style={styles.elementWrapper}>
        <TextComponent i18n="SCREEN.LOGIN.NO_ACCOUNT" />
        <TouchableOpacity onPress={() => navigation.navigate('Email')}>
          <TextComponent
            i18n="SCREEN.LOGIN.REGISTER_NOW"
            family={fonts.medium}
          />
        </TouchableOpacity>
      </View>
    </PagePrimary>
  );
};

const styles = StyleSheet.create({
  elementWrapper: {
    flexDirection: 'row',
    ...mb30,
  },
});

export default Login;
