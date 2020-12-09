import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const PagePrimary = ({children}) => {
  return <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default PagePrimary;
