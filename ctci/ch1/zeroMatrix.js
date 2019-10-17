// Write an algorithm that zeroes out the rows and columns

const clear = (arr, coordinates) => {
  for (let i = 0; i < coordinates.length; i++) {
    let row = coordinates[i][0];
    let column = coordinates[i][1];

    for (let i = 0; i < arr.length; i++) {
      arr[row][i] = null;
    }
    for (let j = 0; j < arr.length; j++) {
      arr[j][column] = null;
    }
  }
};

const zeroMatrix = (arr) => {

  let coordinates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 0) {
        coordinates.push([i, j]);
      }
    }
  }
  
  clear(arr, coordinates);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === null) {
        arr[i][j] = 0;
      }
    }
  }
  console.log(arr);
  return arr;

};

module.exports = {
  zeroMatrix
};