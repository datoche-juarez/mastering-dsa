// Brute Force Solution:

function countBalls(lowLimit, highLimit) {
  let boxes = {};

  for (let i = lowLimit; i <= highLimit; i++) {
    const sum = sumOfDigits(i);

    // If the box number already exists, increment the count; otherwise, initialize it to 1
    if (boxes[sum]) {
      boxes[sum]++;
    } else {
      boxes[sum] = 1;
    }
  }

  // Find the box with the maximum number of balls
  let maxBalls = 0;

  for (const count of Object.values(boxes)) {
    if (count > maxBalls) {
      maxBalls = count;
    }
  }

  return maxBalls;
}

function sumOfDigits(num) {
  return num
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, digit) => acc + digit, 0);
}

// console.log(countBalls(1, 10));

// Optimized Solution:

function countBalls(lowLimit, highLimit) {
  const boxes = new Map();

  for (let i = lowLimit; i <= highLimit; i++) {
    const sum = sumOfDigits(i);

    // Increment the count for the box with the given sum
    boxes.set(sum, (boxes.get(sum) || 0) + 1);
  }

  // Find the maximum number of balls in any box
  let maxBalls = 0;
  for (const count of boxes.values()) {
    if (count > maxBalls) {
      maxBalls = count;
    }
  }

  return maxBalls;
}

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(countBalls(1, 10)); // Output should be 2
