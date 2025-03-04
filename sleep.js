// LeetCode 30 Days of JavaScript
// 2621. Sleep
// January 2nd, 2025

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
