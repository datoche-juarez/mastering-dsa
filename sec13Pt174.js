// October 7th, 2024
// Selection Sort Implementation Exercise:

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// Time complexity O(n^2), Space Complexity O(1)
function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    // Set the current index as minimum:
    let min = i;
    let temp = array[i];

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        // Update minimum if current is lower than what we had previously:
        min = j;
      }
    }

    array[i] = array[min];
    array[min] = temp;
  }

  return array;
}

console.log(selectionSort(numbers));
