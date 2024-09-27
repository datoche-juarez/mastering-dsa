// Merge sorted arrays exercise
// Solution will be in the following file

// function mergeSortedArrays(arr1, arr2) {
//   if (
//     !arr1 ||
//     !arr2 ||
//     arr1.length < 1 ||
//     arr2.length < 1 ||
//     typeof arr1 != "object" ||
//     typeof arr2 != "object"
//   ) {
//     // console.log("This is not valid input!!!");
//     return;
//   }

//   //   console.log("arr1:", arr1);
//   //   console.log("arr2:", arr2);

//   var comboArray = arr1.concat(arr2);
//   // console.log(comboArray);

//   var sortedArray = comboArray.sort(function (a, b) {
//     return a - b;
//   });
//   //   console.log(sortedArray);
//   return sortedArray;
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// Cleaned up solution without logs:

// function mergeSortedArrays(arr1, arr2) {
//   if (
//     !arr1 ||
//     !arr2 ||
//     arr1.length < 1 ||
//     arr2.length < 1 ||
//     typeof arr1 != "object" ||
//     typeof arr2 != "object"
//   ) {
//     return;
//   }
//   var comboArray = arr1.concat(arr2);
//   var sortedArray = comboArray.sort(function (a, b) {
//     return a - b;
//   });
//   return sortedArray;
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// *** September 12th, 2024 Refresher

// Create a function that reverses a string:
// 