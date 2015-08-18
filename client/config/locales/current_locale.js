/**
 * Gets a user locale language
 *
 * @returns {string}
 */
function getUserLanguage() {
  return navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);
}

export default getUserLanguage();
