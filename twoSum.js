// Two Sum:

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] ==9, we return [0, 1]

// Example 2:
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// Example 3:
// Input: nums = [3, 3], target = 6
// Output: [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Create a hash map
  const map = new Map();

  // Loop through the nums array
  for (i = 0; i <= nums.length; i++) {
    // Compliment = target - nums[i]
    const compliment = target - nums[i];

    // Check if compliment is in nums array
    if (map.has(compliment)) {
      // If so, return [map.get(compliment), i]
      return [map.get(compliment), i];
    }

    map.set(nums[i], i);
  }

  return [];
};

const nums = [3, 3];
const target = 6;

console.log(twoSum(nums, target));
