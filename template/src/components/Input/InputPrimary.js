import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {string, bool, func, number} from 'prop-types';
import {fonts, colors} from '../../styles/baseStyle';
import {strings} from '../../translation/i18n';

const InputPrimary = ({
  placeholder,
  submit,
  onChangeText,
  value,
  onBlur,
  keyboardType,
  onFocus,
  maxLength,
  secureTextEntry,
  placeholderTextColor,
  autoFocus,
  editable,
  textContentType,
  multiline,
  contextMenuHidden,
  style,
}) => (
  <View style={[styles.inputWrapper, style]}>
    <TextInput
      style={styles.input}
      contextMenuHidden={contextMenuHidden}
      submit={submit}
      placeholder={strings(placeholder)}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      keyboardType={keyboardType}
      onFocus={onFocus}
      maxLength={maxLength}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={placeholderTextColor}
      autoFocus={autoFocus}
      textContentType={textContentType}
      editable={editable}
      multiline={multiline}
    />
  </View>
);

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: 4,
    justifyContent: 'center',
    paddingLeft: 15,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    maxWidth: '100%',
    fontFamily: fonts.regular,
    color: colors.text2,
    paddingTop: 0,
    paddingBottom: 0,
  },
});

InputPrimary.propTypes = {
  placeholder: string.isRequired,
  submit: bool,
  onChangeText: func.isRequired,
  value: string.isRequired,
  onBlur: func,
  onFocus: func,
  keyboardType: string,
  maxLength: number,
  secureTextEntry: bool,
  placeholderTextColor: string,
  autoFocus: bool,
  textContentType: string,
  editable: bool,
  multiline: bool,
  contextMenuHidden: bool,
};

InputPrimary.defaultProps = {
  submit: false,
  keyboardType: 'default',
  placeholderTextColor: colors.colorText5,
  editable: true,
};

export default InputPrimary;
