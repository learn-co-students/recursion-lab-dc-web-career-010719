// Code your solution here!

function printString(string) {
  if (string.length === 1) {
    console.log(string[0])
  } else {
    console.log(string[0])
    let subString = string.substring(1)
    printString(subString)
  }
}

function reverseString(string) {
  if (string.length === 1) {
    return string
  } else {
    return string[string.length - 1] + reverseString(string.substring(0, string.length - 1))
  }
}

function isPalindrome(word) {
  if (word.length === 1) {
    return true
  } else {
    if (word[word.length - 1] === word[0]) {
      isPalindrome(word.substring(1, word.length - 1))
    } else {
      return false
    }
  }
  return true
}

function addUpTo(array, index) {
  if (index === 0) {
    return array[index]
  } else {
    return array[index] + addUpTo(array, --index)
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  } else {
    return Math.max(array.pop(), maxOf(array))
  }
}

function includesNumber(array, number) {
  if (array.length === 0) {
    return false
  } else if (array[0] === number) {
    return true
  } else {
    return includesNumber(array.slice(1), number)
  }
}
