// LeetCode 30 Days of JavaScript
// 2723. Add Two Promises
// December 27th, 2024

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  const valueOne = await promise1;
  const valueTwo = await promise2;

  const result = valueOne + valueTwo;

  return result;
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
