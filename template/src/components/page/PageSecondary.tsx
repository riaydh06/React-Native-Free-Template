import React, {FC, ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {fonts, sizes} from '@baseStyle';
import {mb10, mb15, mt10} from '@commonStyle';
import ButtonPrimary from '../Button/ButtonPrimary';
import TextComponent from '../Text/TextComponent';
import PagePrimary from './PagePrimary';

interface Props {
  children: ReactNode;
  step: any;
  title: string;
  onPress: Function;
}

const PageSecondary: FC<Props> = ({children, step, title, onPress}) => (
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
