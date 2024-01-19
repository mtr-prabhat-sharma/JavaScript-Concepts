/*
 * Hoisting is a concept in JavaScript through which all the varibales and functions decalre with var keyword are moved to the 
   top of their Scope.

 * It's important to note that only the declarations are hoisted, not the initializations.

 */

// Variable Hoisting:
console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10

/* 
In the above example, the variable myVar is hoisted to the top of the scope during compilation, so the first console.log 
statement outputs undefined.
*/

//Function Hoisting:
sayHello(); // Output: Hello, world!
function sayHello() {
  console.log('Hello, world!');
}

/*
In this example, the function sayHello is hoisted to the top of the scope, allowing you to call it before the actual function 
declaration.
*/
