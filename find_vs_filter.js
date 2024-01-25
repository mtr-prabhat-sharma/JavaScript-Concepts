/* ............................ FILTER ............................. */
/**
 * FILTER creates a new array that satisfies a given condition
 * It return a new array that contains all the elements that passes the condition or may be an empty array is none element passes the condtion
 * It iterates through the entire array and collects all the elements that meet the condition.
 * It not changes the original array
 */

let arr = [22,33,44,55,66,77,88];
let newArr = arr.filter((ele) => {
    return ele % 2 === 0;
})
console.log(arr); //Output: [22, 33, 44, 55,66, 77, 88]
console.log(newArr) //Output: [ 22, 44, 66, 88 ]


/* ............................ FIND ............................. */
/**
 * FIND uses to find the first elements that satifies the condition.
 * FIND returns the first matching element and return UNDEFINED is none is found.
 * Stop iteration after first matching element is found.
 */

let arr1 = [22,33,44,55,66,77,88];
let findVal = arr1.find((ele) => {
    return ele % 2 === 0;
}) 
console.log(arr1); //Output: [22, 33, 44, 55,66, 77, 88]
console.log(findVal); //Output: 22