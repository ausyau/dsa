// Given a string, write a function to check to see if it is a permutation of a palindrome

const palindromePermutation = (str) => {
  let freqCounter = {};
  let strLower = str.toLowerCase();
  
  for (let i = 0; i < strLower.length; i++) {
    if (freqCounter[strLower[i]]) {
      freqCounter[strLower[i]]++;
    } else {
      freqCounter[strLower[i]] = 1;
    }
  }

  let singleOdd = false;
  // Removing spaces since they don't matter
  delete freqCounter[' '];

  for (let key in freqCounter) {
    if (freqCounter[key] % 2 !== 0 && singleOdd) {
      return false;
    }

    if (freqCounter[key] % 2 !== 0) {
      singleOdd = true;
    }
  }
  return true;
};

module.exports = {
  palindromePermutation
};