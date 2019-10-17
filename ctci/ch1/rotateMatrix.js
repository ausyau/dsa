// Function that rotates a matrix


const rotateMatrix = (arr) => {
  for (let i = 0; i < arr.length; i++) {

    let end = arr[i].length - 1 - i;
    for (let j = i; j < end; j++) {
      [arr[i][j], arr[j][end], arr[end][end + i - j], arr[end + i - j][i]] = [arr[end + i - j][i], arr[i][j], arr[j][end], arr[end][end + i - j]];
    }
  }
  return arr;
};

module.exports = {
  rotateMatrix
};