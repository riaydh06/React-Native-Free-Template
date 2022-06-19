import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, fonts, sizes, weights} from '@baseStyle';
import {mr10} from '@commonStyle';
import TextComponent from '../Text/TextComponent';

interface Props {
  slot: any;
  percent: any;
}

const ProgressBar: FC<Props> = ({slot, percent}) => (
  <View style={styles.wrapper}>
    <View style={styles.progressWrapper}>
      <View style={{...styles.progressStyle, width: `${percent}%`}} />
    </View>
    <TextComponent
      content={`0 ${slot} left`}
      family={fonts.semiBold}
      weight={weights.fw500}
      size={sizes.fs12}
    />
  </View>
);
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
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
