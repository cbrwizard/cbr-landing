import localeName from './current_locale';

// importing this raises an error because of reasons
const localeData = require(`./${localeName}/all`);

export default localeData;
