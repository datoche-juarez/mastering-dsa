// October 7th, 2024
// Insertion Sort Implementation:

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// Time Complexity:
// Best Case: O(n)
// Average Case: O(n^2)
// Worst Case: O(n^2)
// Space Complexity: O(1)
function insertionSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // Move number to the first position:
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // Find where number should go:
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // Move number to the correct spot:
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);
