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
