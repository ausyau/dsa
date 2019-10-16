// Write a method to replace all spaces in a string with %20

const urlify = (str) => {
  let strArr = str.split("");

  let lastPos;
  // Find last letter
  for (let i = strArr.length - 1; i >= 0; i--) {
    if (strArr[i] !== ' ') {
      lastPos = i;
      break;
    }
  }

  for (let i = 0; i < lastPos; i++) {
    if (strArr[i] === ' ') {
      strArr[i] = '%20';
    }
  }

  return strArr.slice(0,lastPos+1).join("");
};

const urlifySinglePass = (str) => {
  let strArr = str.split("");

  let lastPos = strArr.length - 1;
  let firstLetterFound = false;

  for (let i = strArr.length - 1; i >= 0; i--) {
    if (strArr[i] !== ' ' && !firstLetterFound) {
      lastPos = i;
      firstLetterFound = true;
    }

    if (strArr[i] === ' ' && firstLetterFound) {
      strArr[i] = '%20';
    }
  }
  return firstLetterFound ? strArr.slice(0,lastPos+1).join("") : '';
};

module.exports = {
  urlify,
  urlifySinglePass
};
