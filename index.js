// Code your solution here!
// function printString(str) {
//   console.log(str[0]);
//
//   if (str.length > 1) {
//     let subString = str.slice(1, str.length);
//     printString(subString);
//   }
// }

// function reverseString(myString) {
//   if (myString.length < 2) {
//     return myString;
//   } else {
//     return reverseString(myString.slice(1)) + myString[0];
//   }
// }

// function isPalindrome(str) {
//   if (str.length === 1) {
//     return true;
//   } else if (str[0] === str[str.length - 1]) {
//     return isPalindrome(str.slice(1, str.length - 1));
//   } else {
//     return false;
//   }
// }

function addUpTo(arr, idx) {
  if (idx === 0) {
    return arr[idx];
  } else {
    return arr[idx] + addUpTo(arr, --idx);
  }
}

function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
}

function includesNumber(arr, num) {
  if (!arr.length) {
    return false;
  } else if (arr[0] === num) {
    return true;
  } else {
    return includesNumber(arr.slice(1), num);
  }
}

function reverseString(myString) {
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.slice(1)) + myString[0];
  }
}

function isPalindrome(myString) {
  if (myString.length <= 1) {
    return true;
  } else if (myString[0] === myString[myString.length - 1]) {
    return isPalindrome(myString.slice(1, myString.length - 1));
  } else {
    return false;
  }
}

function printString(myString) {
  console.log(myString[0]);
  if (myString.length > 1) {
    printString(myString.slice(1));
  }
}
