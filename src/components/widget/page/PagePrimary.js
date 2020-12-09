import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {colors} from '../../../styles/baseStyle';

const PagePrimary = ({children}) => {
  return (
    <SafeAreaView style={styles.safeAreaWrapper}>
      <View style={styles.wrapper}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaWrapper: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.background,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
  },
});

export default PagePrimary;
