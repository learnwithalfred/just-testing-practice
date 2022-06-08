const reverseString = require('../src/reverseString.js');

describe('Reverse a passed in string', () => {


  test('When passing arguments ensure that the length is greater that 0', () => {
    // if user pass a number less that 1
    const input = '';

    // it should trow an error
    expect(() => {
      reverseString(input);
    }).toThrowError(Error('String length must be greater that 0'));
  });


  test('Should reverse string', () => {
    // if user pass in a string
    const input = 'hello world';

    // the results should be "dlrow olleh"
    const output = 'dlrow olleh';

    // Assert
    expect(reverseString(input)).toEqual(output);
  });
});
