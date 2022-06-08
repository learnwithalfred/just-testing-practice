const stringLength = (str = '') => {
  if (str.length < 1) throw Error('String length must be greater that 0');
  if (str.length > 10) throw Error('string length must be less than 10');
  return str.length;
};
module.exports = stringLength;
