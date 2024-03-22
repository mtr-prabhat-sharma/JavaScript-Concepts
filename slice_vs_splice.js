/**
 * Slice: Slice method is used to extract a portion of an array. It creates a new array that contains the extracted elements of array.
 * Syntax: let newArray = OriginalArray.slice(startIndex, endIndex)
 * Slice method does not changes the original array.
 */
let originalArray = [11,22,33,44,55,66,77,88];
let newArray = originalArray.slice(1,4);
console.log(originalArray); // output: [11,22,33,44,55,66,77,88]
console.log(newArray); // output: [22,33,44]



/**
 * Splice: Splice method is used modify the original array by removing or replacing 
   the elements from the original array
 * Syntax: let splicedArray = originalArray.splice(startIndex, deleteCount, element1, element2, ...)
 * In the above syntax element1, element2, .. are optional
 * Splice method changes the original array.
 * Splice method returns the deleted elements in array form
 */

let originalArray2 = [11,22,33,44,55,66,77,88];
let splicedArray = originalArray2.splice(1, 3, 2222,3333,4444);
console.log(originalArray2); //output: [11,2222,3333,4444,55,66,77,88]
console.log(splicedArray); //output: [22,33,44]