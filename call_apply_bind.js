/**
 * Call, Apply and Bind are used for function borrowing
 *
 * Call invokes the function and allows you to pass in arguments one by one.
   Apply invokes the function and allows you to pass in arguments as an array.
   Bind returns a new function, allowing you to pass in a this array and any 
   number of arguments.
*/

//CALL
const objCall = {
    name:'Jhon',
    age:32
}

function sayHello(greetings) {
    console.log(greetings, this.name);
}
sayHello.call(objCall,'Hello');

//APPLY
const objApply = {
    name:'Jhon',
    age:32
}

function sayHello(greetings) {
    console.log(greetings, this.name);
}
sayHello.apply(objCall,['Hello']);

//BIND
const obj = {
    name:'Prabhat Sharma',
    age: 29,
};
function greet1() {
    console.log(`Hello ${this.name} your age is ${this.age}`);
}
let print = greet1.bind(obj);
print();


// let nameObj = { 
//     name: "Tony"
// } 
  
// let PrintName = { 
//     name: "steve", 
    
// } 

// function sayHi() { 
    
//     // Here "this" points to nameObj 
//     console.log(this.name);  
// } 
// //PrintName.sayHi();
//  let HiFun = sayHi.bind(PrintName); 
//  HiFun();