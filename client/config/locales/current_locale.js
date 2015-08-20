import currentLocaleFunction from 'current_locale';

const currentLocale = currentLocaleFunction({
  supportedLocales: ['ru', 'en-US'],
  fallbackLocale: 'en-US'
});

export default currentLocale;
