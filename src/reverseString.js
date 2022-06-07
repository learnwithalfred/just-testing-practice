const reverseString = (str) => {
  if (!str.length) throw Error('Reverse string cannot be empty');
  if (typeof str !== String) throw Error('Reverse string must be string');
  return str.split('').reverse().join('');
};

module.exports = reverseString;
