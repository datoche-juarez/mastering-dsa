// September 12th, 2024

// Create a function that reverses a string:
// 'Hi my name is Andrei' should be:
// 'ierdnA si eman ym iH'

function reverse(str) {
  // Check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);

  // You can use either the toString method:
  // return backwards.toString();

  // Or you can use the .join method:
  return backwards.join("");
}

// Solution using JavaScript built in .reverse() function:
function reverse2(str) {
    return str.split('').reverse().join((""));
}

// Solution using JavaScript ES6 arrow function with .reverse() function:
const reverse3 = str => str.split('').reverse().join('');

// Solution using JavaScript ES6 spread operator and .reverse() function:
const reverse4 = str => [...str].reverse().join('');

reverse2("Hi my name is Andrei");
console.log(reverse4("Hi my name is Andrei"));