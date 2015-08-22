import localeName from './current_locale';

// importing this raises an error because of reasons
console.log(localeName);
const localeData = require(`./${localeName}/all`);

export default localeData;
