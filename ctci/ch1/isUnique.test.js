const { isUnique, isUniqueBruteForce, isUniqueSort } = require('./isUnique');

test('isUnique finds returns correct', () => {
  expect(isUnique('hello')).toBe(false);
  expect(isUnique('helo')).toBe(true);
  expect(isUnique('asdf2')).toBe(true);
  expect(isUnique('22aabb')).toBe(false);
});

test('isUnique using brute force finds returns correct', () => {
  expect(isUniqueBruteForce('hello')).toBe(false);
  expect(isUniqueBruteForce('helo')).toBe(true);
  expect(isUniqueBruteForce('asdf2')).toBe(true);
  expect(isUniqueBruteForce('22aabb')).toBe(false);
});

test('isUnique with a sort finds returns correct', () => {
  expect(isUniqueSort('hello')).toBe(false);
  expect(isUniqueSort('helo')).toBe(true);
  expect(isUniqueSort('asdf2')).toBe(true);
  expect(isUniqueSort('22aabb')).toBe(false);
});