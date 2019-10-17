const { zeroMatrix } = require('./zeroMatrix');


test('Zero Matrix runs', () => {
  expect(zeroMatrix([[1,1,1,1],[1,0,1,1],[1,1,1,1],[1,1,1,1]])).toEqual([[1,0,1,1],[0,0,0,0],[1,0,1,1],[1,0,1,1]]);
  expect(zeroMatrix([[1,1,1,0],[1,0,1,1],[1,1,1,1],[1,0,1,1]])).toEqual([[0,0,0,0],[0,0,0,0],[1,0,1,0],[0,0,0,0]]);
});