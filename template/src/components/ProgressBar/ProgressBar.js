import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, fonts, sizes, weights} from '../../styles/baseStyle';
import {mr10, row} from '../../styles/commonStyle';
import TextComponent from '../Text/TextComponent';

const ProgressBar = ({slot, percent}) => (
  <View style={styles.wrapper}>
    <View style={styles.progressWrapper}>
      <View style={{...styles.progressStyle, width: `${percent}%`}} />
    </View>
    <TextComponent
      content="0 slots left"
      family={fonts.semiBold}
      weight={weights.fw500}
      size={sizes.fs12}
    />
  </View>
);
const styles = StyleSheet.create({
  wrapper: {
    ...row,
    alignItems: 'center',
  },
  progressWrapper: {
    backgroundColor: colors.gray,
    width: 100,
    height: 12,
    ...mr10,
  },
  progressStyle: {
    backgroundColor: colors.primary,
    height: 12,
  },
});
export default ProgressBar;
