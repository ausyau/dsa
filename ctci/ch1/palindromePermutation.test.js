const { palindromePermutation } = require('./palindromePermutation');


test("Palindrome works", () => {
  expect(palindromePermutation("tact coa")).toBe(true);
  expect(palindromePermutation("tactcoa")).toBe(true);
  expect(palindromePermutation("hello")).toBe(false);
  expect(palindromePermutation("hellohello")).toBe(true);
  expect(palindromePermutation("hello!hello")).toBe(true);
});