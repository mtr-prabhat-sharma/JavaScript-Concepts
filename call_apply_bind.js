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