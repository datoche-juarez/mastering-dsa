// LeetCode 30 Days of JavaScript
// 2627. Debounce
// March 25th, 2025

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

var debounce = function (fn, t) {
  let timerId;

  return function (...args) {
    // Clear any existing timer
    if (timerId) clearTimeout(timerId);

    // Set a new timer to execute fn after t milliseconds
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, t);
  };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
