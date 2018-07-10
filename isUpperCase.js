/**
 * @fileOverview Checks if the string is in uppercase
 */

/**
 * Checks if the string is in uppercase
 * @param {string} s The string to be checked
 * @returns {boolean}
 */
const isUppercase = (s) => {
  let i;
  let flag = 0;
  let char = '';
  for (i = 0; i < s.length; i += 1) {
    char = s.charAt(i);
    if (char !== ' ') {
      if (char === char.toLowerCase()) {
        flag = 1;
        break;
      }
    }
  }
  return (flag === 0);
};

module.exports = isUppercase;
