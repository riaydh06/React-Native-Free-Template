import React from 'react';
import {Text} from 'react-native';
import {colors, fonts, sizes} from '../../../styles/baseStyle';
import {string, number, oneOfType} from 'prop-types';

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

TextComponent.defaultProps = {
  content: '',
  family: fonts.regular,
  color: colors.text,
  size: sizes.fs14,
  align: 'left',
  weight: 'normal',
  style: 'normal',
};

TextComponent.propTypes = {
  content: string.isRequired,
  family: string,
  color: string,
  size: number,
  align: string,
  weight: oneOfType([string, number]),
  style: string,
};

export default TextComponent;
