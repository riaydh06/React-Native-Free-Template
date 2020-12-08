import React from 'react';
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import {string, func, bool} from 'prop-types';
import {colors} from '../../../styles/baseStyle';
import TextComponent from '../Text/TextComponent';

const ButtonPrimary = ({content, disabled, onPress}) => {
  const opacity = disabled ? 0 : 1;
  return (
    <TouchableOpacity style={[styles.wrapper, {opacity}]} onPress={onPress()}>
      {disabled && (
        <ActivityIndicator
          size="small"
          color={colors.colorText}
          style={styles.loaderStyle}
        />
      )}
      {!disabled && <TextComponent content={content} disabled />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 42,
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
};

ButtonPrimary.defaultProps = {
  disabled: false,
};

export default ButtonPrimary;
