
// Using Hash Tables

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

// array1 ==> obj {
    // a: true,
    // b: true,
    // c: true,
    // x: true
// }
// array2[index] === obj.properties

function containsCommonItem2(arr1, arr2) {
    // loop through first array and create object
    // where properties === items in the array
    // can we assume always two params?
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if(!map[arr1[i]]) {
            const item = array1[i];
            map[item] = true;
        }
    }
    // loop through the second array and check if item
    // is second array exists on created object

    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            console.log('Match found:' + arr2[j]);
            return true;
        }
    }
    return false;

}

    //O(a + b) Time Complexity
    //O(a) Space Complexity

containsCommonItem2(array1, array2);

// Using ES6 to clean up code and make it more readable:

function containsCommonItem3(arr1, arr2) {
    console.log('Second function', arr1.some(item => arr2.includes(item)));

    return arr1.some(item => arr2.includes(item));
}
    containsCommonItem3(array1, array2);
