const { oneAway, oneAway2 } = require('./oneAway');


test("one away sorting works", () => {
  expect(oneAway("pale", "ple")).toBe(true);
  expect(oneAway("pales", "pale")).toBe(true);
  expect(oneAway("pale", "bale")).toBe(true);
  expect(oneAway("pale", "bake")).toBe(false);
  // expect(oneAway("ab", "ba")).toBe(false);
  expect(oneAway("a", "a")).toBe(true);
});

// test("one away sorting works", () => {
//   expect(oneAway2("pale", "ple")).toBe(true);
//   expect(oneAway2("pales", "pale")).toBe(true);
//   expect(oneAway2("pale", "bale")).toBe(true);
//   expect(oneAway2("pale", "bake")).toBe(false);
// });
