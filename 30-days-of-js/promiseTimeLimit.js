// LeetCode 30 Days of JavaScript
// 2637. Promise Time Limit
// March 3rd, 2025

/**
 * @param {Function} promiseFn - A function that returns a promise.
 * @param {number} t - The time limit in milliseconds.
 * @return {Function} A new function that enforces the time limit on the promise.
 */
var timeLimit = function (promiseFn, t) {
  // Return a new function that wraps the original promise-returning function.
  return function (...args) {
    // Call the original promise function with the provided arguments.
    const originalPromise = promiseFn(...args);

    // Create a timeout promise that rejects after t milliseconds.
    const timeout = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });

    // Race the original promise against the timeout promise.
    return Promise.race([originalPromise, timeout]);
  };
};

// Example usage:
const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" because 150ms > 100ms
