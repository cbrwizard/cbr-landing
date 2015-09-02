import currentLocaleFunction from 'current-locale';

const currentLocale = currentLocaleFunction({
  supportedLocales: ['ru', 'en-US'],
  fallbackLocale: 'en-US',
});

console.log(currentLocale);
export default currentLocale;
