import React, {useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';
import {assets} from '../../../assets';
import {TextComponent} from '../../../components/ui';
import {PagePrimary} from '../../../components/widget';
import {fonts, sizes} from '../../../styles/baseStyle';
import {mb15} from '../../../styles/commonStyle';

const StepOne = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, [navigation]);
  return (
    <PagePrimary style={styles.wrapper}>
      <Image source={assets.Success} style={mb15} />
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

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
  },
});

export default StepOne;
