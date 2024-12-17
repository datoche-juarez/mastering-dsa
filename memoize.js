// LeetCode 30 Days of JavaScript
// 2666. Allow One Function Call
// December 17th, 2024

/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = args.toString();
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
  };
}

let callCount = 0;

const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1