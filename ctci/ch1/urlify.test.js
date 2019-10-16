const { urlify, urlifySinglePass } = require('./urlify');

test('Urlify works as intended', () => {
  expect(urlify('austin yau')).toBe('austin%20yau');
  expect(urlify(' austinyau')).toBe('%20austinyau');
  expect(urlify('austinyau')).toBe('austinyau');
  expect(urlify('a u s t i n yau')).toBe('a%20u%20s%20t%20i%20n%20yau');
  expect(urlify('austin yau    ')).toBe('austin%20yau');
  expect(urlify('ayau       ')).toBe('ayau');
  expect(urlify(' ')).toBe('');
});

test('Urlify works as intended', () => {
  expect(urlifySinglePass('austin yau')).toBe('austin%20yau');
  expect(urlifySinglePass(' austinyau')).toBe('%20austinyau');
  expect(urlifySinglePass('austinyau')).toBe('austinyau');
  expect(urlifySinglePass('a u s t i n yau')).toBe('a%20u%20s%20t%20i%20n%20yau');
  expect(urlifySinglePass('austin yau    ')).toBe('austin%20yau');
  expect(urlifySinglePass('ayau       ')).toBe('ayau');
  expect(urlifySinglePass(' ')).toBe('');
});