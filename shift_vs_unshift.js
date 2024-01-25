/* ........... SHIFT ................ */

/**
 * SHIFT removes the first element from the array and returns it.
 * SHIFT also modifies the original array.
 */

let arr = [11,22,33,44,55];
let newArr = arr.shift();
console.log(arr); //Output: [ 22, 33, 44, 55 ]
console.log(newArr); //Output: 11

/* ........... UNSHIFT ................ */
/**
 * UNSHIFT adds one or more elements to the array and return the new length of the array.
 * UNSHIFT also modifies the original array.
 */

let arr1 = [11,22,33,44,55];
let newArr1 = arr1.unshift(9,10,111);
console.log(arr1); //Output: [9, 10, 111, 11, 22, 33, 44, 55]
console.log(newArr1); //Output: 8