/**
A deep copy creates a new object that has its own copies of all the properties of
the original object. 
This means that if you make a change to one of the properties 
in the new object, the change will not be reflected in the original object.
 */

//1st method: Using JSON.parse() and JSON.stringify()
let obj = {
    name:'Jhon',
    age:31,
    address: {
        city:'NJ',
        PIN:12345
    }
};
let copiedObj = JSON.parse(JSON.stringify(obj));
copiedObj.address.PIN = 11122;
console.log(copiedObj); //{ name: 'Jhon', age: 31, address: { city: 'NJ', PIN: 11122 } }
console.log(obj); // { name: 'Jhon', age: 31, address: { city: 'NJ', PIN: 12345 } }


// 2nd method: Using spread operators- but spread operators are used when objects 
// are simple not nested structure