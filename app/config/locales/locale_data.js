import localeName from './current_locale';

// importing this raises an error because of reasons
const localeData = require(`./${localeName}/all`);

console.log(localeData);
export default localeData;
