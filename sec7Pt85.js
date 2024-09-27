// *** Solution to the last problem:

// Google Interview Question

// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

// First solution using loops (not good...)

// function firstRecurringCharacter(input) {
//     for (let i = 0; i < input.length; i++) {
//         for (let j = i + 1; j < input.length; j++) {
//             if (input[i] === input[j]) {
//                 return input[i];
//             }
//         }
//     }
//     return undefined;
// } //O(n^2)

// firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);

// Second solution:

function firstRecurringCharacter2(input) {
  let map = {};

  for (let i = 0; i < input.length; i++) {
    console.log(map[input[i]]);
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }

  return undefined;
} // O(n)

firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]);

// Solution that updates the first solution so that it returns elements the same way that the hash map does. It compares each element as it loops with the elements in the array behind it. This is still a worse solution as far as time complexity goes but this demonstrates how we can change the way we loop through the array using the same data structure:

// function firstRecurringCharacter3(input) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = 0; j < i; j++) {
//       // Compare with previous elements
//       if (input[i] === input[j]) {
//         console.log(input[i]);
//         return input[i];
//       }
//     }
//   }
//   return undefined;
// } O(n^2)

// firstRecurringCharacter3([2, 5, 5, 2, 3, 5, 1, 2, 4]);

