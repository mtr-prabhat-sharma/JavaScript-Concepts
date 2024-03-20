/**
 * Higher order functions (HOF) are those functions that takes another functions
   as an arguments(callbacks) or returns another functions.
   Foreg: map function
 */

const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(doubledNumbers); // Outputs: [2, 4, 6, 8]

//Function returning another function
function createMultiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10