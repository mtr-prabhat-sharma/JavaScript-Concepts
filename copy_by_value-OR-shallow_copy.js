/**
 Shallow Copy means that if you make a change to one of the properties in the new 
 object, the change will also be reflected in the original object.
 */

 //1st method: Using assignment(=) operator
 let obj = {
    name:'Jhon',
    age:31,
    address: {
        city:'NJ',
        PIN:12345
    }
};

console.log(obj); //{ name: 'Jhon', age: 31, address: { city: 'NJ', PIN: 12345 } }
let copiedObj = obj; //1st Method of shallow copy
copiedObj.address.PIN = 11122;
console.log(obj); // { name: 'Jhon', age: 31, address: { city: 'NJ', PIN: 11122 } }

//2nd method: Using Object.assign()
let obj1 = {
    name:'Jhon',
    age:31,
    address: {
        city:'NJ',
        PIN:12345
    }
};
console.log(obj); //{ name: 'Jhon', age: 31, address: { city: 'NJ', PIN: 12345 } }
let copiedObj = Object.assign({}, obj);
copiedObj.address.PIN = 11122;
console.log(obj); //{ name: 'Jhon', age: 31, address: { city: 'NJ', PIN: 11122 } }


