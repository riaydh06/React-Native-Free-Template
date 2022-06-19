import React, {FC} from 'react';
import {Text} from 'react-native';
import {colors, fonts, sizes} from '@baseStyle';
import {strings} from '../../translation/i18n';

interface Props {
  i18n?: any;
  value?: any;
  content?: string;
  family?: string;
  weight?: string | number;
  size?: number;
  color?: string;
  style?: any;
  styles?: any;
  align?: string;
  children?: any;
}

const TextComponent: FC<Props> = ({
  i18n,
  value,
  content,
  family,
  weight,
  size,
  color,
  style,
  styles,
  align,
  children,
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
      {i18n ? strings(i18n, value) : content}
      {children}
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

export default TextComponent;
