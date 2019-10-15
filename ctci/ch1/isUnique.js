// Implement an algorithm to determine if a string has all unique characters
// What if you cannot use additonal data structures

const isUnique = (str) => {
  let freqCounter = {};

  for (let i = 0; i < str.length; i++) {
    if (freqCounter[str[i]]) {
      return false;
    } else {
      freqCounter[str[i]] = 1;
    }
  }
  return true;
};


const isUniqueBruteForce = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};

const isUniqueSort = (str) => {
  let sortedStr = str.sort();
  for (let i = 1; i < sortedStr.length; i++) {
    if(sortedStr[i-1] === sortedStr[i]) {
      return false;
    }
  };
  return true;
};


module.exports = {
  isUnique,
  isUniqueBruteForce,
  isUniqueSort
};