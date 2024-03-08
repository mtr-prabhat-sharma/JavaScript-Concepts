// function num(){
//     var n = 1;
//     function inner() {
//         console.log(n);
//     }
//     n++;
//     return inner;
// }
// const data = num();
// data();
  

// function outer() {
//     let x = 10;
  
//     function inner(y) {
//       let result = x + y;
//       console.log(result);
//     }
  
//     inner(5);
//   }
  
//   outer();
  
// function outerFunction() {
//     var x = 11;

//     function innerFunction(y) {
//         var sum = x + y;
//         console.log(sum);
//     }
//     console.log(innerFunction)
//     return innerFunction; // Returning the inner function (creating a closure)
// }

// var closure = outerFunction(); // outerFunction is called, and innerFunction is returned
// closure(22); // This still has access to the variable x from outerFunction


function moveLastToFirst(arr) {
    // Store the last element of the array
    let lastElement = arr[arr.length - 1];

    // Shift elements to the right
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

    // Place the last element at the beginning of the array
    arr[0] = lastElement;

    return arr;
}

// Example usage:
let arr = [1, 2, 3, 4, 5];
let outputArray = moveLastToFirst(arr);
console.log(outputArray); // Output: [5, 1, 2, 3, 4]
