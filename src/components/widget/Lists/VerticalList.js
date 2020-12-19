import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {string, func, bool} from 'prop-types';
import {colors, fonts, weights} from '../../../styles/baseStyle';
import TextComponent from '../Text/TextComponent';
import {strings} from '../../../locales/i18n';

const ButtonPrimary = ({content, disabled, onPress, loading, style}) => {
  const opacity = disabled ? 0.5 : 1;
  return (
    <TouchableOpacity
      style={[styles.wrapper, style]}
      disabled={disabled}
      onPress={onPress}>
      <View style={[styles.viewWrapper, {opacity}]}>
        {loading && (
          <ActivityIndicator
            size="small"
            color={colors.colorText}
            style={styles.loaderStyle}
          />
        )}
        {!loading && (
          <TextComponent
            content={strings(content)}
            family={fonts.semiBold}
            weight={weights.fw500}
            disabled
          />
        )}
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
    height: 52,
    backgroundColor: colors.secondary,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderStyle: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
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
