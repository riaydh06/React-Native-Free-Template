import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {string, func, bool} from 'prop-types';
import {colors} from '../../../styles/baseStyle';
import TextComponent from '../Text/TextComponent';

const ButtonPrimary = ({content, disabled, onPress, loading}) => {
  const opacity = disabled ? 0.5 : 1;
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress()}>
      <View style={[styles.wrapper, {opacity}]}>
        {loading && (
          <ActivityIndicator
            size="small"
            color={colors.colorText}
            style={styles.loaderStyle}
          />
        )}
        {!loading && <TextComponent content={content} disabled />}
      </View>
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
  loading: bool,
};

ButtonPrimary.defaultProps = {
  disabled: false,
  loading: false,
};

export default ButtonPrimary;
