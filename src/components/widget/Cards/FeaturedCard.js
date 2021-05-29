import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {string, func, bool} from 'prop-types';
import {colors, fonts, sizes, weights} from '../../../styles/baseStyle';
import {assets} from '../../../assets';
import {TextComponent} from '../../ui';
import {mb5, row, w100, m10, mb10, mr15} from '../../../styles/commonStyle';

const FeaturedCard = ({title, subtitle, onPress, point, rating}) => (
  <TouchableOpacity style={styles.wrapper} onPress={onPress}>
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

const styles = StyleSheet.create({
  wrapper: {
    width: 280,
    ...mb10,
    ...mr15,
  },
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

FeaturedCard.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  onPress: func.isRequired,
  loading: bool,
};

FeaturedCard.defaultProps = {
  loading: false,
};

export default FeaturedCard;
