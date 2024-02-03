/**
 * In Javascript, a Closure is created when a function is defined inside another 
   function (outer function), and the inner function have access to the variables of 
   the outer function, even after outer function has finished execution.
 * A closure is the combination of a function and the lexical environment within 
   which that function was declared.
 */

function outerFunction() {
    var x = 11;

    function innerFunction(y) {
        var sum = x + y;
        console.log(sum);
    }
    console.log(innerFunction)
    return innerFunction; // Returning the inner function (creating a closure)
}

var closure = outerFunction(); // outerFunction is called, and innerFunction is returned
closure(22); // This still has access to the variable x from outerFunction

/**
A lexical environment in JavaScript is a data structure that stores the variables 
and functions that are defined in the current scope and all of the outer scopes. 
It is also known as the lexical scope or the lexical closure.

The lexical environment is created when a function is called and destroyed when the
function returns.
*/

/**
The lexical environment is used to resolve variable names. When the JavaScript 
interpreter encounters a variable name, it first searches for the variable in the 
lexical environment of the current scope. If the variable is not found in the 
current scope, the interpreter searches the lexical environment of the outer scope,
and so on.
*/

/**
The interpreter continues searching the lexical environment until it finds the 
variable or it reaches the global scope. If the variable is not found anywhere in the
lexical environment, the interpreter throws a ReferenceError exception.
*/

// Here is an example of a lexical environment:

function outer() {
    var x = 10;
    function inner() {
        // The lexical environment of `inner()` contains the variable `x` from `outer()`.
        console.log(x);
    }
    inner();
}
outer();


/**
When the outer() function is called, a new lexical environment is created. 
The lexical environment of outer() contains the variable x.

The inner() function is then called. The lexical environment of inner() contains the 
variable x from outer(). This is because the lexical environment of a function 
includes the lexical environment of all of its outer scopes.

The JavaScript interpreter searches for the variable x in the lexical environment of 
inner(). The interpreter finds the variable x and logs the value 10 to the console.

The lexical environment is an important concept in JavaScript because it helps to 
explain how closures work. Closures are functions that can access variables from 
their outer scopes, even after the outer scopes have returned.
*/