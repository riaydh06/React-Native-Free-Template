import React, {FC} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {colors, fonts, weights} from '@baseStyle';
import TextComponent from '../Text/TextComponent';
import {strings} from '../../translation/i18n';

interface Props {
  content: string;
  disabled: boolean;
  onPress: any;
  loading: boolean;
  style: any;
}

const ButtonSecondary: FC<Props> = ({
  content,
  disabled,
  onPress,
  loading,
  style,
}) => {
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
            color={colors.text}
            style={styles.loaderStyle}
          />
        )}
        {!loading && (
          <TextComponent
            content={strings(content)}
            family={fonts.semiBold}
            weight={weights.fw500}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
  },
  viewWrapper: {
    width: 200,
    height: 52,
    backgroundColor: colors.secondary,
    borderRadius: 25,
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

ButtonSecondary.defaultProps = {
  disabled: false,
  loading: false,
};

export default ButtonSecondary;
