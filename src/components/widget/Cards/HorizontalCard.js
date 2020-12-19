import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {string, func, bool} from 'prop-types';
import {colors, fonts, sizes, weights} from '../../../styles/baseStyle';
import {assets} from '../../../assets';
import {TextComponent} from '../../ui';
import {mb5, row, w100, m10} from '../../../styles/commonStyle';

const HorizontalCard = ({title, subtitle, onPress, point, rating}) => {
  return (
    <TouchableOpacity style={{width: 280}} onPress={onPress}>
      <View style={styles.contentWrapper}>
        <View>
          <Image source={assets.Appointment02} style={styles.imageStyle} />
        </View>
        <View style={styles.leftWrapper}>
          <View>
            <TextComponent
              content={title}
              family={fonts.semiBold}
              weight={weights.fw500}
              styles={mb5}
            />
            <TextComponent
              content={subtitle}
              color={colors.text2}
              size={sizes.fs12}
            />
          </View>
          <View style={styles.bottomWrapper}>
            <TextComponent
              content={point}
              family={fonts.semiBold}
              weight={weights.fw500}
              size={sizes.fs12}
            />
            <TextComponent
              content={rating}
              family={fonts.semiBold}
              weight={weights.fw500}
              size={sizes.fs12}
              color={colors.text2}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    ...w100,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  imageStyle: {
    ...w100,
    height: 135,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  leftWrapper: {
    ...m10,
    height: 80,
    justifyContent: 'space-between',
  },
  bottomWrapper: {
    ...row,
    justifyContent: 'space-between',
  },
});

HorizontalCard.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  onPress: func.isRequired,
  loading: bool,
};

HorizontalCard.defaultProps = {
  loading: false,
};

export default HorizontalCard;
