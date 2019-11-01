// Write a function to check and see if two str's are one edit distance away

const oneAway = (str1, str2) => {
  let str1Counter = freqCounter(str1);
  let str2Counter = freqCounter(str2);

  let longer = str1.length >= str2.length ? str1Counter : str2Counter;
  let shorter = str1.length >= str2.length ? str2Counter : str1Counter;

  let count = 0;
  for (let key in longer) {
    if (longer[key] && shorter[key]) {
      count += Math.abs(longer[key] - shorter[key]);
    } else {
      if (longer[key]) {
        count += longer[key];
      }

      if (shorter[key]) {
        count += shorter[key];
      }
    }
  }
  // Setting count can determine the edit distance.
  return count < 2 ? true : false;
};

function freqCounter(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
};

const oneAway2 = (str1, str2) => {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

};

const oneAwaySort = (str1, str2) => {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  let sort1 = str1.split('').sort();
  let sort2 = str2.split('').sort();

  let length = str1.length <= str2.length ? str1.length : str2.length;
  let count = 0;

  for (let i = 0; i < length; i++) {
    if (sort1[i] !== sort2[i]) {
      count++;
    }

    if (count > 1) {
      return false;
    }
  }
  return true;
};

module.exports = {
  oneAway,
  oneAway2,
  oneAwaySort
};