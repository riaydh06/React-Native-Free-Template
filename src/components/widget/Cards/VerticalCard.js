import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {string, func, bool} from 'prop-types';
import {colors, fonts, sizes, weights} from '../../../styles/baseStyle';
import {assets} from '../../../assets';
import {TextComponent} from '../../ui';
import {
  mb5,
  row,
  mr15,
  w100,
  p15,
  w50,
  flex1,
} from '../../../styles/commonStyle';

const ButtonPrimary = ({title, subtitle, onPress, disabled, point, rating}) => {
  return (
    <TouchableOpacity style={w100} disabled={disabled} onPress={onPress}>
      <View style={styles.contentWrapper}>
        <View style={mr15}>
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
          <View style={row}>
            <TextComponent
              content={point}
              family={fonts.semiBold}
              weight={weights.fw500}
              size={sizes.fs12}
              styles={w50}
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
    flexDirection: 'row',
    backgroundColor: colors.white,
    ...p15,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  leftWrapper: {
    ...flex1,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

ButtonPrimary.propTypes = {
  content: string.isRequired,
  onPress: func.isRequired,
  disabled: bool,
  loading: bool,
};

ButtonPrimary.defaultProps = {
  disabled: false,
  loading: false,
};

export default ButtonPrimary;
