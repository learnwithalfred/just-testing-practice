const capitalizeString = (str) => {
  const splitString = str.split('');
  const firstChar = splitString[0].toUpperCase();
  const remainingStr = splitString.slice(1).join('');
  return firstChar + remainingStr;
};

module.exports = capitalizeString;