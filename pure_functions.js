/*
A pure function is a function that always returns the same output for the same 
input and has no side effects.
*/

//These functions all take two numbers as input and return a number as output.
// They do not modify any state outside of their scope, and they do not cause any 
//side effects.
function sum(a,b) {
    return a + b;
}

//Impure functions
function message(msg) {
    console.log(msg);
}