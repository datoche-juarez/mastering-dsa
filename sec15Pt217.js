// October 15th, 2024
// Fibonacci and Dynamic Programming:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

// Time Complexity: O(2^n) --- This is REALLY bad!
// Using Dynamic Programming, we can get our time complexity down to O(n)

let calculations = 0;

function fibonacci(n) {
  calculations++;
  console.log("calculations:", calculations);

  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(15));
