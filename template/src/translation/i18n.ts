import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

import en from './en';
import bd from './bd';

I18n.locale = 'en';

I18n.fallbacks = true;

I18n.translations = {
  en,
  bd,
};

const currentLocale = I18n.currentLocale();

// Is it a RTL language?
export const isRTL =
  currentLocale.indexOf('bd') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string
export function strings(name: any, params = {}) {
  return I18n.t(name, params);
}

export const switchLanguage = (lang: any, component: any) => {
  I18n.locale = lang;
  component.forceUpdate();
};

export default I18n;
