let counter = 0;

function inception() {
  console.log(counter);

  if (counter > 3) {
    return "done!";
  }

  counter++;

  inception();
  console.log("hello?");
}

inception();

// 3 Rules for Recursion:
// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually you have 2 returns.
