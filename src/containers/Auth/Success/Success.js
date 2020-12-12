import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {assets} from '../../../assets';
import {TextComponent} from '../../../components/ui';
import {PagePrimary} from '../../../components/widget';
import {fonts, sizes} from '../../../styles/baseStyle';
import {mb15, mt40} from '../../../styles/commonStyle';

const StepOne = ({navigation}) => {
  return (
    <PagePrimary>
      <Image source={assets.Success} style={[mt40, mb15]} />
      <TextComponent
        i18n="SCREEN.SUCCESS.TITLE"
        styles={mb15}
        family={fonts.semiBold}
        size={sizes.fs24}
      />
      <TextComponent
        i18n="SCREEN.SUCCESS.SUBTITLE"
        align="center"
        styles={mb15}
      />
    </PagePrimary>
  );
};

export default StepOne;
