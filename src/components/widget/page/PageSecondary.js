import React from 'react';
import {StyleSheet, View} from 'react-native';
import {fonts, sizes} from '../../../styles/baseStyle';
import {mb10, mb15, mt10} from '../../../styles/commonStyle';
import {ButtonPrimary, TextComponent} from '../../ui';
import PagePrimary from './PagePrimary';

const PageSecondary = ({children, step, title, onPress}) => (
  <PagePrimary>
    <TextComponent
      i18n={step}
      family={fonts.semiBold}
      size={sizes.fs18}
      styles={mb15}
    />
    <TextComponent
      i18n={title}
      family={fonts.medium}
      size={sizes.fs16}
      styles={mb15}
    />
    {children}
    <View style={styles.buttonWrapper}>
      <ButtonPrimary style={mb15} content="BUTTON.CONTINUE" onPress={onPress} />
    </View>
  </PagePrimary>
);

const styles = StyleSheet.create({
  iconWrapper: {
    ...mt10,
    ...mb10,
    height: 30,
    width: 100,
  },
  buttonWrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
});

export default PageSecondary;
