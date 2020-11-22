import React from 'react';
import {Text} from 'react-native';
import {colors, families, fontSizes} from '../../../../Assets/Styles/base';

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
  family: families.regular,
  color: colors.colorText,
  size: fontSizes.fs16,
  align: 'left',
  weight: 'normal',
  style: 'normal',
};

export default TextComponent;
