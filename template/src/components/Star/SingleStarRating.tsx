import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {assets} from '../../assets';
import {colors, fonts, sizes, weights} from '@baseStyle';
import {mr5, row} from '@commonStyle';
import TextComponent from '../Text/TextComponent';

interface Props {
  rating: any;
}

const SingleStarRating: FC<Props> = ({rating}) => (
  <View style={styles.wrapper}>
    <Image source={assets.StarFilled} style={styles.imageStyle} />
    <TextComponent
      content={rating}
      family={fonts.semiBold}
      weight={weights.fw500}
      size={sizes.fs12}
      color={colors.text2}
    />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    ...row,
    alignItems: 'center',
  },
  imageStyle: {
    width: 10,
    height: 10,
    ...mr5,
  },
});

export default SingleStarRating;
