import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

// Import all locales
import en from './en';
import ben from './ben';

// set default locale
//I18n.locale = "en";

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en,
  ben,
};

const currentLocale = I18n.currentLocale();

// Is it a RTL language?
export const isRTL =
  currentLocale.indexOf('ben') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params);
}

export const switchLanguage = (lang, component) => {
  I18n.locale = lang;
  component.forceUpdate();
};

export default I18n;
