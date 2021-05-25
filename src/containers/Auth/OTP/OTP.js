import React, {useState} from 'react';
import {ModalComponent, PagePrimary} from '../../../components/widget';
import {
  ButtonPrimary,
  InputPrimary,
  TextComponent,
} from '../../../components/ui';
import {mb15, mb30} from '../../../styles/commonStyle';
import {fonts, sizes} from '../../../styles/baseStyle';

const Email = ({navigation}) => {
  const [otp, setOtp] = useState('');

  return (
    <PagePrimary>
      <TextComponent
        i18n="SCREEN.OTP.TITLE"
        family={fonts.medium}
        size={sizes.fs24}
        styles={mb15}
      />
      <TextComponent
        i18n="SCREEN.OTP.SUBTITLE"
        size={sizes.fs16}
        align="center"
        styles={mb15}
      />
      <InputPrimary
        placeholder="PLACEHOLDER.OTP"
        value={otp}
        secureTextEntry
        onChangeText={(text) => setOtp(text)}
        style={mb15}
      />
      <TextComponent
        i18n="SCREEN.OTP.RESEND_OTP"
        family={fonts.medium}
        size={sizes.fs20}
        align="center"
        styles={mb30}>
        <TextComponent content="00:32" />
      </TextComponent>
      <ButtonPrimary
        style={mb15}
        content="BUTTON.CONTINUE"
        onPress={() => navigation.navigate('StepOne')}
      />
      <ModalComponent
        visible
        options={[]}
        onSelect={() => {}}
        onChange={() => {}}
      />
    </PagePrimary>
  );
};

export default Email;
