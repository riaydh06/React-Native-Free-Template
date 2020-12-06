import React from 'react';
import {Text} from 'react-native';
import {colors, fonts, sizes} from '../../../styles.js/baseStyle';

const TextComponent = ({
  content,
  family,
  weight,
  size,
  color,
  style,
  styles,
  align,
}) => {
  return (
    <Text
      style={{
        fontFamily: family,
        color: color,
        fontSize: size,
        fontWeight: weight,
        fontStyle: style,
        textAlign: align,
        ...styles,
      }}>
      {content}
    </Text>
  );
};

Text.defaultProps = {
  content: '',
  family: fonts.regular,
  color: colors.text,
  size: sizes.fs14,
  align: 'left',
  weight: 'normal',
  style: 'normal',
};

export default TextComponent;
