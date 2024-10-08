// Fibonacci Sequence

function fibonacci(num) {
  if (num === 0) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  }

  let sequence = [0, 1];

  for (let i = 2; i < num; i++) {
    let nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextNum);
  }

  return sequence;
}

console.log("Fibonacci sequence:", fibonacci(10));

// Fibonacci Sequence Using Recursion:
function fibonacciRecursive(n) {
  if (n < 0) {
    throw new Error("Input must be a non-negative integer.");
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Example usage:
console.log(fibonacciRecursive(5)); // Output: 5

// Fibonacci Sequence Using Recursion and Memoization:
// *** Note: Using memoization allows us to avoid redundant calculations significantly improving performance for larger n

function fibonacciRecursiveMemo(n, memo = {}) {
  if (n < 0) {
    throw new Error("Input must be a non-negative integer.");
  }
  if (n in memo) {
    return memo[n];
  }
  if (n === 0) {
    memo[n] = 0;
  } else if (n === 1) {
    memo[n] = 1;
  } else {
    memo[n] =
      fibonacciRecursiveMemo(n - 1, memo) + fibonacciRecursiveMemo(n - 2, memo);
  }
  return memo[n];
}

// Example usage:
console.log(fibonacciRecursiveMemo(50)); // Output: 12586269025
