// LeetCode 30 Days of JavaScript
// 2626. Array Reduce Transformation
// December 10th, 2024

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let val = init;

  if (nums.length < 1) {
    return init;
  }

  for (i = 0; i < nums.length; i++) {
    if (i === 0) {
      val = fn(init, nums[0]);
    } else {
      val = fn(val, nums[i]);
    }
  }

  return val;
};

let nums = [];
let fn = function sum(accum, curr) {
  return 0;
};
let init = 25;

console.log(reduce(nums, fn, init));
