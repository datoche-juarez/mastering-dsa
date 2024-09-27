// Google Interview Question

// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

arr1 = [2,5,1,2,3,5,1,2,4];
arr2 = [2,1,1,2,3,5,1,2,4];
arr3 =  [2,3,4,5];

function duplicateNumber(array) {
    var hash = Object.create(null),
        i, l, value;

    for (i = 0, l = array.length; i < l; i++) {
        value = array[i];
        if (hash[value]) {
            return value;
        }
        hash[value] = true;
    }
}
  duplicateNumber(arr2);
  console.log(duplicateNumber(arr1)); 
  console.log(duplicateNumber(arr2)); 
  console.log(duplicateNumber(arr3)); 