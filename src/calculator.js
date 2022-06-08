class Calculator {
  add(x, y) {
    if (!y) throw Error('Two inputs required');
    if (typeof x !== 'number' || typeof y !== 'number')
      throw Error('Only number input is accepted');
    if (x === 0 || y === 0) throw Error('Input should not be zero');

    return x + y;
  }

  subtract(x, y) {
    if (!y) throw Error('Two inputs required');
    if (typeof x !== 'number' || typeof y !== 'number')
      throw Error('Only number input is accepted');
    if (x < y) throw Error('First input should be grater that second input');
    return x - y;
  }

  divide(x, y) {
    if (!y) throw Error('Two inputs required');
    if (typeof x !== 'number' || typeof y !== 'number')
      throw Error('Only number input is accepted');
    if (x < y) throw Error('First input should be grater that second input');
    return x / y;
  }

  multiply(x, y) {
    if (!y) throw Error('Two inputs required');
    if (typeof x !== 'number' || typeof y !== 'number')
      throw Error('Only number input is accepted');
    if (x === 0 || y === 0) throw Error('Input should not be zero');
    return x * y;
  }
}

module.exports = Calculator;
