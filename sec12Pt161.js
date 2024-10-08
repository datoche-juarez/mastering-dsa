// Given the number N, return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for n = 5 -> 2 + 3

// Instructor's Iterative Solution:
function fibonacciIterative(n) { // O(n)
  let arr = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}

console.log(fibonacciIterative(2));

// function fibonacciIterative(n) {
//   if (n === 0) {
//     return [];
//   } else if (n === 1) {
//     return [0];
//   } else if (n === 2) {
//     return [0, 1];
//   }

//   let sequence = [0, 1];

//   for (let i = 2; i < n; i++) {
//     let nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];
//     sequence.push(nextNum);
//   }

//   return sequence;
// }

// console.log(fibonacciIterative(13));

function fibonacciRecursive(n) { // O(2^n) which is also known as exponential time ***
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// console.log(fibonacciRecursive(13));
