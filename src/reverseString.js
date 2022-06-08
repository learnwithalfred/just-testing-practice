const reverseString = (str) => {
  if (str.length < 1) throw Error('String length must be greater that 0');
  return str.split('').reverse().join('');
};

module.exports = reverseString;
