import {colors, fonts, sizes} from '@baseStyle';

export const navigationOption = (
  show: boolean,
  title: string,
  background: string,
  color: string,
) => {
  if (show) {
    return {
      title,
      headerTintColor: colors.dark,
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: background || colors.background,
        elevation: null,
        shadowOpacity: 0,
      },
      headerTitleStyle: {
        fontFamily: fonts.regular,
        fontSize: sizes.fs20,
        color: color || colors.dark,
      },
    };
  } else {
    return {
      headerShown: false,
    };
  }
};
