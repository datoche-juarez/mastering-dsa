// October 7th, 2024
// Bubble Sort Implementation:

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// Time complexity O(n^2), Space Complexity O(1)
function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        // Swap numbers:
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
