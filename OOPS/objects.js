/**
 * In Javascript, objects are keys values pairs, where keys are of type 'string' and values are of any type.
 * There are multiple ways for creating objects in Javascript, like using Object Literals, Constructor functions, Object.create()
 * and Classes (ES6).
 */

/* ........... Creating Objects using Object Literals ............. */
const firstPerson = {
    name: 'Jhon',
    age: 35,
    sayHello: function() {
        console.log(`Hello ${this.name}`);
    }
}
console.log(firstPerson); //output: { name: 'Jhon', age: 35, sayHello: [Function: sayHello] }
firstPerson.sayHello(); //output: Hello Jhon


/* ........... Creating Objects using Constructor Functions ............. */
// In Javascript a constructor function is any function that is called with the 'new' keyword.
function SecondPerson(name, age) {
    
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello ${this.name} your age is ${this.age}`)
    };
    
}
let secondPerson = new SecondPerson('Jhon', 38);
secondPerson.sayHello();


/* ........... Creating Objects using Object.create() method ............. */