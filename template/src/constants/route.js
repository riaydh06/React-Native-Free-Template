import {colors, fonts, sizes} from '../styles/baseStyle';

export const navigationOption = (show, title, background, color) => {
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
