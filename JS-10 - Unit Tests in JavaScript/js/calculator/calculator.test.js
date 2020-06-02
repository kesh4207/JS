const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

//Implement 2 unit tests for the *divide* function.

test('-6 divided by 3 to be equal -2', () =>{
  expect(calculator.divide(-6,3)).toBe(-2);
});

test('- 6 divided by - 3 to be equal 2', () =>{
  expect(calculator.divide(-6,-3)).toBe(2);
});

//Implement 2 unit tests for the *multiply* function.

test('- 6 multiplied by - 3 to be equal 18', () =>{
  expect(calculator.multiply(-6,-3)).toBe(18);
});

test('- 8 multiplied by 8 to be equal -64', () =>{
  expect(calculator.multiply(-8,8)).toBe(-64);
});
