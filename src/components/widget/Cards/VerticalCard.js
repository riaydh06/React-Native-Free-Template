import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {string, func, bool} from 'prop-types';
import {colors, fonts, weights} from '../../../styles/baseStyle';
import {assets} from '../../../assets';
import {TextComponent} from '../../ui';

const ButtonPrimary = ({title, subtitle, onPress, disabled, point, rating}) => {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      disabled={disabled}
      onPress={onPress}>
      <View style={{flexDirection: 'row', backgroundColor: colors.white}}>
        <View style={{padding: 10}}>
          <Image
            source={assets.Appointment02}
            style={{width: 90, height: 90}}
          />
        </View>
        <View style={{width: '100%', margin: 10}}>
          <TextComponent
            content={title}
            family={fonts.semiBold}
            weight={weights.fw500}
          />
          <TextComponent content={subtitle} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextComponent
              content={point}
              family={fonts.semiBold}
              weight={weights.fw500}
            />
            <TextComponent
              content={rating}
              family={fonts.semiBold}
              weight={weights.fw500}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  viewWrapper: {
    width: '100%',
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
