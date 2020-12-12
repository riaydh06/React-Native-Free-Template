import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {colors} from '../../../styles/baseStyle';
import {flex1, pl15, pr15} from '../../../styles/commonStyle';

const PagePrimary = ({children, style}) => {
  return (
    <SafeAreaView style={flex1}>
      <View style={[styles.wrapper, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    ...flex1,
    ...pl15,
    ...pr15,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
});

export default PagePrimary;
