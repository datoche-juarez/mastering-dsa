// LeetCode 30 Days of JavaScript
// 2665. Counter II
// December 10th, 2024

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let count = init;

  function increment() {
    return ++count;
  }

  function decrement() {
    return --count;
  }

  function reset() {
    count = init;

    return count;
  }

  return {
    increment,
    decrement,
    reset,
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
