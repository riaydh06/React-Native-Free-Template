import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {colors} from '../../../styles/baseStyle';
import {flex1, pl15, pr15} from '../../../styles/commonStyle';

const PagePrimary = ({children, style, container}) => {
  return (
    <SafeAreaView style={flex1}>
      <View style={[styles.wrapper, style, container && styles.container]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    ...flex1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  container: {
    ...pl15,
    ...pr15,
  },
});

PagePrimary.defaultProps = {
  container: true,
};

export default PagePrimary;
