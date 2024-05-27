/**
1. Arrow functions does not have prototype but normal functions have prototype object.
    Prototype: Prototype is an object that is associated with every function and object.

    function normal() {

    }
    console.log(normal.prototype) // display some object

    let arrow = () => {

    }
    console.log(arrow.prototype) // undefined

2. There is no constructor for the arrow functions, therefore we can not instantiate
    arrow functions with new keyword.

    function normal() {

    }
    
    let obj = new normal(); // works in normal function

    let arrow = () => {

    }

    let obj = new arrow(); //throws error that, arrow is not a constructor

3. Duplicate parameters are not allowed in arrow functions.
    But if we don't use 'use strict' then duplicate parameters are allowed in
    normal functions.

    function normal(a,a,a) {
        console.log(a); // prints the last parameter i.e.,4
    }
    normal(2,3,4)

    'use strict'
    function normal(a,a,a) {
        console.log(a); // duplicate parameters are not allowed
    }
    normal(2,3,4)

    const arrow = (a,a,a) => {
        console.log(a); // duplicate parameters are not allowed
    }
    arrow(2,3,4)
 */