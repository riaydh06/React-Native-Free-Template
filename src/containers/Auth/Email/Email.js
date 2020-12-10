import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {PagePrimary} from '../../../components/widget';
import {
  ButtonPrimary,
  InputPrimary,
  TextComponent,
} from '../../../components/ui';
import {assets} from '../../../assets';
import {mb15, mb30} from '../../../styles/commonStyle';

const Email = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <PagePrimary>
      <Image source={assets.Logo02} style={styles.iconWrapper} />
      <TextComponent i18n="SCREEN.EMAIL.TITLE" align="center" styles={mb15} />
      <InputPrimary
        placeholder="PLACEHOLDER.EMAIL"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={mb15}
      />
      <ButtonPrimary
        style={mb15}
        content="BUTTON.CONTINUE"
        onPress={() => navigation.navigate('OTP')}
      />

      <TextComponent
        i18n="SCREEN.EMAIL.CONDITION"
        align="center"
        styles={mb30}
      />
    </PagePrimary>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    marginTop: 15,
    marginBottom: 15,
  },
});

export default Email;
