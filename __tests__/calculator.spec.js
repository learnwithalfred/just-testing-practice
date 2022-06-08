const Calculator = require('../src/calculator.js');

// Addition

describe('Adding numbers', () => {
  const calculator = new Calculator();

  test('Two inputs required', () => {
    // if input user enter only one input
    let input = 12;

    // throw error
    expect(() => calculator.add(input)).toThrowError(
      Error('Two inputs required')
    );
  });

  test('Only number input is accepted, all inputs should be numbers', () => {
    // if input user a string

    // throw error
    expect(() => calculator.add('85612', '12')).toThrowError(
      Error('Only number input is accepted')
    );
  });

  test('Input should not be zero', () => {
    // if input user enter a number and the second number is less than the first number

    // throw error
    expect(() => calculator.add(0, 78)).toThrowError(
      Error('Input should not be zero')
    );
  });
});

// subtraction

describe('Subtracting numbers', () => {
  const calculator = new Calculator();

  test('Two inputs required', () => {
    // if input user enter only one input
    let input = 12;

    // throw error
    expect(() => calculator.subtract(input)).toThrowError(
      Error('Two inputs required')
    );
  });

  test('Only number input is accepted, all inputs should be numbers', () => {
    // if input user a string

    // throw error
    expect(() => calculator.subtract('85612', '12')).toThrowError(
      Error('Only number input is accepted')
    );
  });

  test('First input should be grater that second input', () => {
    // if input user enter a number and the second number is less than the first number

    // throw error
    expect(() => calculator.subtract(12, 578)).toThrowError(
      Error('First input should be grater that second input')
    );
  });
});

// Division

describe('Dividing numbers', () => {
  const calculator = new Calculator();

  test('Two inputs required', () => {
    // if input user enter only one input
    let input = 12;

    // throw error
    expect(() => calculator.divide(input)).toThrowError(
      Error('Two inputs required')
    );
  });

  test('Only number input is accepted, all inputs should be numbers', () => {
    // if input user a string

    // throw error
    expect(() => calculator.divide('85612', '12')).toThrowError(
      Error('Only number input is accepted')
    );
  });

  test('First input should be grater that second input', () => {
    // if input user enter a number and the second number is less than the first number

    // throw error
    expect(() => calculator.divide(12, 578)).toThrowError(
      Error('First input should be grater that second input')
    );
  });
});

// Multiplication

describe('Multiplying numbers', () => {
  const calculator = new Calculator();

  test('Two inputs required', () => {
    // if input user enter only one input
    let input = 12;

    // throw error
    expect(() => calculator.multiply(input)).toThrowError(
      Error('Two inputs required')
    );
  });

  test('Only number input is accepted, all inputs should be numbers', () => {
    // if input user a string

    // throw error
    expect(() => calculator.multiply('85612', '12')).toThrowError(
      Error('Only number input is accepted')
    );
  });

  test('Input should not be zero', () => {
    // if input user enter a number and the second number is less than the first number

    // throw error
    expect(() => calculator.multiply(0, 78)).toThrowError(
      Error('Input should not be zero')
    );
  });
});
