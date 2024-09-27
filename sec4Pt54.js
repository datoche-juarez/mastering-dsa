// Given 2 arrays, create a function that let's a user
// know (true/false) whether these two arrays contain any common items.
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
// ------------------------------------------------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.

// 2 parameters - arrays - no size limit
// return true or false

// BRUTE FORCE SOLUTION

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function constainsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
          console.log('Match found:' + arr1[i]);
        return true;
      }
    }
  }
  return false;
}

// O(a * b)
//O(1) - Space Complexity

constainsCommonItem(array1, array2);

// ------------------------------------------------------------
