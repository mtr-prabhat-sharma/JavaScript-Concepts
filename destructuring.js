/**
 * Array and Object destructuring is a feature of javascript which is introduced in ES6 and used to extract values from arrays 
 * and objects.
 */

// Array Destructuring
const numbers = [11,22,33,44,55];
const [first, second, ...rest] = numbers;
console.log(first); //Output: 11
console.log(second); //Output: 22
console.log(rest); //Output: [33,44,55]

// Swap values using array destructuring
let a = 100; 
let b = 200;
console.log(a); //Output: 100
console.log(b); //Output: 200
[a , b] = [b , a];
console.log(a); //Output: 200
console.log(b); //Output: 100


//Object Destructuring:
const person = {name: 'Jhon', age: 25, country:'USA'};
const {name, age, country} = person;
console.log(name); //Output: Jhon
console.log(age); //Output: 25
console.log(country); //Output: USA

//Renaming object variables using object destructuring
const details = {name: 'Tom', surname: 'Cruise', age: 25, country:'USA'};
const {name: firstName, surname: lastName} = details;
console.log(firstName); //Output: Tom
console.log(lastName); //Output: Cruise

//Combined Array and Object Destructuring:
const data = {
    user: 'Alice',
    posts: [
      { title: 'Post 1', content: 'Lorem ipsum' },
      { title: 'Post 2', content: 'Dolor sit amet' }
    ]
  };
  
  // Combined array and object destructuring
  const { user, posts: [{ title: postTitle1 }, { title: postTitle2 }] } = data;
  
  console.log(user);        // Output: Alice
  console.log(postTitle1);  // Output: Post 1
  console.log(postTitle2);  // Output: Post 2
  