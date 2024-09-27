// September 12th, 2024

// Merge Sorted Arrays Problem:
// mergeSortedArrays([0,3,4,31], [4,6,30]);
// Should return: [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(array1, array2) {
  const mergedArrays = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  // Check input
  if (array1.length === 0) {
    return array2;
  }

  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      mergedArrays.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArrays.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArrays;
}

// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// ** Tip: During an interview, you could probably clean this up by creating seperate functions called something like pushArrayItem1 and pushArrayItem2 which you could use in the if statement inside of the while loop. This would make the code cleaner and more readable. **
