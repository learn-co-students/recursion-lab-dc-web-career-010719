// Code your solution here!
function printString(string) {
  if (string.length < 2) {
    console.log(string)
    return
  } else {
    console.log(string[0])
    printString(string.substring(1))
  }
}

function reverseString(string) {
  if (string.length < 2) {
    return string
  } else {
    return string.slice(-1) + reverseString(string.substring(0, string.length - 1))
  }
}

function isPalindrome(string) {
  if (string.length < 2) {
    return true
  } else {
    if (string[0] === string[string.length - 1]) {
      return isPalindrome(string.slice(1, string.length - 1))
    } else {
      return false
    }
  }
}

function addUpTo(nums, index) {
  if (index === 0) {
    return nums[0]
  } else {
    return nums[index] + addUpTo(nums, index - 1)
  }
}

function maxOf(nums) {
  if (nums.length < 2) {
    return nums[0]
  } else {
    return Math.max(nums[0], maxOf(nums.slice(1)))
  }
}

function includesNumber(nums, num) {
  if (nums.length < 2) {
    if (nums[0] === num) {
      return true
    } else {
      return false
    }
  } else {
    if (nums[0] === num) {
      return true
    } else {
      return includesNumber(nums.slice(1), num)
    }
  }
}
