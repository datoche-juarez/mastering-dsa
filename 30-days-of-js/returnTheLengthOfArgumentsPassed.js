// LeetCode 30 Days of JavaScript
// 2703. Return the Length of Arguments Passed
// December 11th, 2024

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length;
};

console.log(argumentsLength(1, 2, 3)); // 3
