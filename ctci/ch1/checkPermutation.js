// Given two strings, write a method to decide if one is a permutation of the other

const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let freqCounter = {};

  for (let i = 0; i < str1.length; i++) {
    if (freqCounter[str1[i]]) {
      freqCounter[str1[i]]++;
    } else {
      freqCounter[str1[i]] = 1;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    if (freqCounter[str2[j]] === 0 || !freqCounter[str2[j]]) {
      return false;
    }

    if (freqCounter[str2[j]]) {
      freqCounter[str2[j]]--;
    }
  }

  return true;
};

const checkPermutationSort = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let sorted1 = str1.split("").sort();
  let sorted2 = str2.split("").sort();

  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] !== sorted2[i]) {
      return false;
    }
  }

  return true;
};


module.exports = {
  checkPermutation,
  checkPermutationSort
};
