import currentLocaleFunction from 'current-locale';

const currentLocale = currentLocaleFunction({
  supportedLocales: ['ru', 'en-US'],
  fallbackLocale: 'en-US'
});

export default currentLocale;
