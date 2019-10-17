// Basic String Compression using counts of characters

const stringCompression = (str) => {

  let arr = [str[0]];
  let current = str[0];
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (current === str[i]) {
      count++;
    } else {
      arr.push(count);
      current = str[i];
      arr.push(current);
      count = 1;
    }
  }
  arr.push(count);
  return arr.join('');
};

module.exports = {
  stringCompression
};