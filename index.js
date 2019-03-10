// Code your solution here!
function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(str) {
  if (str.length < 2) {
    return str
  } else {
    return reverseString(str.substring(1)) + str[0]
  }
}

function isPalindrome(str) {
  if (str.length < 2) {
    return true
  } else if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, str.length-1))
  } else {
    return false
  }
}

function addUpTo(arr, index) {
  if (index > 0) {
    return arr[index] + addUpTo(arr, --index)
  } else {
    return arr[index]
  }
}

function maxOf(arr) {
  //really?
  if (arr.length === 1) {
    return arr[0]
  } else {
    return Math.max(arr.pop(), maxOf(arr))
  }
}

function includesNumber(arr, num) {
  if (arr.length === 0) {
    return false
  } else if (arr[0] === num) {
    return true
  } else {
    return includesNumber(arr.slice(1), num)
  }

}







//
