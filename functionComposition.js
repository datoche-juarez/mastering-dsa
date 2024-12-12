// LeetCode 30 Days of JavaScript
// 26259. Function Composition
// December 11th, 2024

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  } else {
    return function (x) {
      result = x;

      for (i = functions.length - 1; i >= 0; i--) {
        result = functions[i](result);
      }

      return result;
    };
  }
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9
