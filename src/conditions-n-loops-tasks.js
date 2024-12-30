/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;

  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }

  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }
  return a === b || a === c || b === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';

  if (num >= 10) {
    const tens = Math.floor(num / 10);
    if (tens === 3) result += 'XXX';
    else if (tens === 2) result += 'XX';
    else if (tens === 1) result += 'X';
  }

  const units = num % 10;
  if (units === 9) result += 'IX';
  else if (units === 8) result += 'VIII';
  else if (units === 7) result += 'VII';
  else if (units === 6) result += 'VI';
  else if (units === 5) result += 'V';
  else if (units === 4) result += 'IV';
  else if (units === 3) result += 'III';
  else if (units === 2) result += 'II';
  else if (units === 1) result += 'I';

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  let needSpace = false;

  for (let i = 0; i < numberStr.length; i += 1) {
    const char = numberStr[i];

    if (needSpace) {
      result += ' ';
    }

    switch (char) {
      case '0':
        result += 'zero';
        needSpace = true;
        break;
      case '1':
        result += 'one';
        needSpace = true;
        break;
      case '2':
        result += 'two';
        needSpace = true;
        break;
      case '3':
        result += 'three';
        needSpace = true;
        break;
      case '4':
        result += 'four';
        needSpace = true;
        break;
      case '5':
        result += 'five';
        needSpace = true;
        break;
      case '6':
        result += 'six';
        needSpace = true;
        break;
      case '7':
        result += 'seven';
        needSpace = true;
        break;
      case '8':
        result += 'eight';
        needSpace = true;
        break;
      case '9':
        result += 'nine';
        needSpace = true;
        break;
      case '-':
        result += 'minus';
        needSpace = true;
        break;
      case '.':
      case ',':
        result += 'point';
        needSpace = true;
        break;
      default:
        break;
    }
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let length = 0;

  while (str[length] !== undefined) {
    length += 1;
  }

  for (let i = 0; i < length / 2; i += 1) {
    if (str[i] !== str[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let index = 0;

  while (str[index] !== undefined) {
    if (str[index] === letter) {
      return index;
    }
    index += 1;
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let tempNum = num;
  while (tempNum > 0) {
    if (tempNum % 10 === digit) {
      return true;
    }
    tempNum = Math.floor(tempNum / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
// for (let i = 0; i < arr.length; i += 1) {
//   let leftSum = 0;
//   let rightSum = 0;

//   for (let l = 0; l < i; l += 1) {
//     leftSum += arr[l];
//   }

//   for (let r = i + 1; r < arr.length; r += 1) {
//     rightSum += arr[r];
//   }

//   if (leftSum === rightSum) {
//     return i;
//   }
// }

// return -1;
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let leftSum = 0;
    let rightSum = 0;

    for (let l = 0; l < i; l += 1) {
      leftSum += arr[l];
    }

    for (let r = i + 1; r < arr.length; r += 1) {
      rightSum += arr[r];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  if (size <= 0 || size % 1 !== 0) {
    throw new Error('Invalid input size');
  }

  const matrix = new Array(size);
  for (let i = 0; i < size; i += 1) {
    matrix[i] = new Array(size);
  }

  let num = 1;
  let rowStart = 0;
  let rowEnd = size - 1;
  let colStart = 0;
  let colEnd = size - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i += 1) {
      matrix[rowStart][i] = num;
      num += 1;
    }
    rowStart += 1;

    for (let i = rowStart; i <= rowEnd; i += 1) {
      matrix[i][colEnd] = num;
      num += 1;
    }
    colEnd -= 1;

    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i -= 1) {
        matrix[rowEnd][i] = num;
        num += 1;
      }
      rowEnd -= 1;
    }

    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i -= 1) {
        matrix[i][colStart] = num;
        num += 1;
      }
      colStart += 1;
    }
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newMatrix = matrix;
  const result = [];
  for (let i = 0; i < matrix.length; i += 1) {
    result[i] = [...matrix[i]];
  }
  for (let i = 0; i < matrix.length; i += 1) {
    const el = matrix[i];
    for (let j = 0; j < el.length; j += 1) {
      result[j][matrix.length - 1 - i] = el[j];
    }
  }
  for (let i = 0; i < result.length; i += 1) {
    newMatrix[i] = [...result[i]];
  }
  return newMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const sortedArr = arr;
  for (let i = 1; i < arr.length; i += 1) {
    const key = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > key; j -= 1) {
      sortedArr[j + 1] = arr[j];
    }
    sortedArr[j + 1] = key;
  }
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(inputString, numIterations) {
  const stringHistory = new Map();
  let currentString = inputString;
  for (let i = 0; i < numIterations; i += 1) {
    if (stringHistory.has(currentString)) {
      const cycleStartIndex = stringHistory.get(currentString);
      const cycleLength = i - cycleStartIndex;
      const remainingIterations = (numIterations - i) % cycleLength;
      return shuffleChar(currentString, remainingIterations);
    }
    stringHistory.set(currentString, i);
    const evenChars = [];
    const oddChars = [];
    let evenIndex = 0;
    let oddIndex = 0;
    for (let j = 0; j < currentString.length; j += 1) {
      if (j % 2 === 0) {
        evenChars[evenIndex] = currentString[j];
        evenIndex += 1;
      } else {
        oddChars[oddIndex] = currentString[j];
        oddIndex += 1;
      }
    }
    let shuffledString = '';
    for (let k = 0; k < evenIndex; k += 1) {
      shuffledString += evenChars[k];
    }
    for (let k = 0; k < oddIndex; k += 1) {
      shuffledString += oddChars[k];
    }
    currentString = shuffledString;
  }
  return currentString;
}
/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digitArray = [];
  let tempNumber = number;

  while (tempNumber > 0) {
    digitArray.unshift(tempNumber % 10);
    tempNumber = Math.floor(tempNumber / 10);
  }

  let index = digitArray.length - 2;

  while (index >= 0 && digitArray[index] >= digitArray[index + 1]) {
    index -= 1;
  }

  if (index === -1) {
    return number;
  }

  let swapIndex = digitArray.length - 1;

  while (digitArray[swapIndex] <= digitArray[index]) {
    swapIndex -= 1;
  }

  let temp = digitArray[index];
  digitArray[index] = digitArray[swapIndex];
  digitArray[swapIndex] = temp;

  let leftPointer = index + 1;
  let rightPointer = digitArray.length - 1;

  while (leftPointer < rightPointer) {
    temp = digitArray[leftPointer];
    digitArray[leftPointer] = digitArray[rightPointer];
    digitArray[rightPointer] = temp;
    leftPointer += 1;
    rightPointer -= 1;
  }

  let result = 0;

  for (let k = 0; k < digitArray.length; k += 1) {
    result = result * 10 + digitArray[k];
  }

  return result;
}
module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
