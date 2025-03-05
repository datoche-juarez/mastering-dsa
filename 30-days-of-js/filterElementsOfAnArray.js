// LeetCode 30 Days of JavaScript
// 2634. Filter Elements from Array
// December 10th, 2024

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let result = [];

  for (i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }

  return result;
};
