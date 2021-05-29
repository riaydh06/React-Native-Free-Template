import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors, fonts, sizes, weights} from '../../../styles/baseStyle';
import {TextComponent} from '../../ui';
import {w100, pv15, row} from '../../../styles/commonStyle';

const VerticalCard = ({title, onPress}) => (
  <View style={styles.wrapper}>
    <TextComponent
      content={title}
      family={fonts.semiBold}
      weight={weights.fw500}
      size={sizes.fs16}
    />
    <TouchableOpacity onPress={onPress}>
      <TextComponent
        content="SEE ALL"
        family={fonts.semiBold}
        weight={weights.fw500}
        size={sizes.fs16}
        color={colors.text2}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    ...w100,
    ...row,
    justifyContent: 'space-between',
    ...pv15,
  },
});

export default VerticalCard;
