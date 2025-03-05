// LeetCode 30 Days of JavaScript
// 2666. Allow One Function Call
// December 11th, 2024

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let hasBeenCalled = false;
  let result;

  return function () {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn.apply(this, arguments);
      return result;
    } else {
      return undefined;
    }
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn

// Better and Simpler Solution:
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let count = 0;
  return function (...args) {
    if (count >= 1) {
      return undefined;
    }
    count++;
    return fn(...args);
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
