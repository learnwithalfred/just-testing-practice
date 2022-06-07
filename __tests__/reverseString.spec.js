const reverseString = require('../src/reverseString.js');

describe('Reverse a passed in string', () => {
  test('input should be a string', () => {
    // assuming user passed in number
    const input = 5678;

    // trow error
    expect(() => {
      reverseString(input);
    }).toThrow('Only string input is accepted');
  });
  test('Input should not be null', () => {
    // if user pass in no input
    const input = '';

    // trow error
    expect(() => {
      reverseString(input);
    }).toThrow('Function expect an argument');
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
