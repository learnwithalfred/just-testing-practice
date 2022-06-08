const stringLength = require('../src/stringLength.js');

describe('Calculate length of string', () => {
  test('should print the length of string', () => {
    // Assuming we have name 'john'
    const input = 'John';

    // the length should be equal to 4
    const output = 4;

    // Assert
    expect(stringLength(input)).toEqual(output);
  });

  test('When passing arguments ensure that the length is greater that 0', () => {
    // if user pass a number less that 1
    const input = '';

    // it should trow an error
    expect(() => {
      stringLength(input);
    }).toThrowError(Error('String length must be greater that 0'));
  });

  test('String length must be less that or equal to 10', () => {
    // if user pass in a string that is greater that 10
    const input = 'I am a very long string';

    // trow and error
    expect(() => {
      stringLength(input);
    }).toThrowError(Error('string length must be less than 10'));
  });
});
