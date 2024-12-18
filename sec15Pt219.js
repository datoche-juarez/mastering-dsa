// October 15th, 2024
// Fibonacci Using Memoization:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

let calculations = 0;

// Fibonacci w/out Memoization:
// Time Complexity: O(2^n)

function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Fibonacci Using Memoization:
// Time Complexity: O(n)

function fibonacciMaster() {
  let cache = {};

  return function fib(n) {
    calculations++;

    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);

        return cache[n];
      }
    }
  };
}

const fasterFib = fibonacciMaster();
console.log("Slow", fibonacci(35));

console.log("DP:", fasterFib(100));

console.log("We did " + calculations + " calculations");
