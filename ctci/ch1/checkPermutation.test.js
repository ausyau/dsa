const { checkPermutation, checkPermutationSort } = require('./checkPermutation');

test('check permutations returns correct', () => {
  expect(checkPermutation('hello', 'ehllo')).toBe(true);
  expect(checkPermutation('tacocat', 'cattaco')).toBe(true);
  expect(checkPermutation('weird', 'mail')).toBe(false);
  expect(checkPermutation('male', 'mail')).toBe(false);
});

test('check permutations returns correct', () => {
  expect(checkPermutationSort('hello', 'ehllo')).toBe(true);
  expect(checkPermutationSort('tacocat', 'cattaco')).toBe(true);
  expect(checkPermutationSort('weird', 'mail')).toBe(false);
  expect(checkPermutationSort('male', 'mail')).toBe(false);
});