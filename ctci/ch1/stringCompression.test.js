const { stringCompression } = require('./stringCompression');

test("String Compression", () => {
  expect(stringCompression('aabcccccaaa')).toEqual('a2b1c5a3');
  expect(stringCompression('abcd')).toEqual('a1b1c1d1');
  expect(stringCompression('aabbccdd')).toEqual('a2b2c2d2');
  expect(stringCompression('aAbB')).toEqual('a1A1b1B1');
});