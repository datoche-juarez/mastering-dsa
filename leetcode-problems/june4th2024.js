// This is my and Thadd's solution that combines our remove zeros function with the Udemy Merge Sorted Arrays function from the DSA course:
function removeElementsWithValue(arr, val) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === val) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  if (array1.length === 0) {
    // Sort array 2 and then return it
    return array2;
  }
  if (array2.length === 0) {
    // Sort array1 and then return it
    return array1;
  }

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  console.log("mergedArray: ", mergedArray);

  let sortedArray = removeElementsWithValue(mergedArray, 0);

  console.log("sortedArray:", sortedArray);

  return sortedArray;
}

mergeSortedArrays([1, 2, 3, 0, 0, 0], [2, 5, 6]);


// This is the GPT provided solution: 

function merge(nums1, m, nums2, n) {
    // Initialize pointers for nums1 and nums2
    let i = m - 1; // Pointer for the last element in the initial part of nums1
    let j = n - 1; // Pointer for the last element in nums2
    let k = m + n - 1; // Pointer for the last position in nums1
  
    // Merge nums2 into nums1 starting from the end
    while (j >= 0) {
      if (i >= 0 && nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        i--;
      } else {
        nums1[k] = nums2[j];
        j--;
      }
      k--;
    }
  }
  
  // Example usage
  let nums1 = [1, 2, 3, 0, 0, 0];
  let m = 3;
  let nums2 = [2, 5, 6];
  let n = 3;
  
  merge(nums1, m, nums2, n);
  console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
  
