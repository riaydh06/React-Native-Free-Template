import React, {FC, ReactNode} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {flex1, pl15, pr15} from '@commonStyle';
import {colors} from '@baseStyle';

interface Props {
  children: ReactNode;
  style?: any;
  container?: any;
}

const PagePrimary: FC<Props> = ({children, style, container}) => (
  <SafeAreaView style={flex1}>
    <View style={[styles.wrapper, style, container && styles.container]}>
      {children}
    </View>
  </SafeAreaView>
);

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
