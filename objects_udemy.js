/**
 * Objects are Reference values (Non Primitive).
 
 * Objects consists of properties and methods.
 
 * If we try to access a property that doesn't exits in objects, it will give undefined.
 
 * All the keys in objects are implicitly coherese to strings. So keys with spaces are allowed
   as a string.
   let person = {
    'first name' : 'Jhon',
    'last name' : 'Doe',
    1.5 : 'Hello'
   }
   to access such properties use square bracket notations
   console.log(person['first name']).

 * Numbers as keys are also valid in js as in above example.

 * The order of properties in an object is according to the order in which we are adding the
   properties in an object.

 * If all the keys are numbers, then the properties will be sorted in ascending order.

 * Dynamic value access is  possible using square bracket notation.
   Eg. let keyName = 'first name';
   person[keyName];
   
 * Dynamically adding properties to an object.
   let cityName = 'city';
   let obj = {
    name: 'Jhon',
    age: 20,
    cityName: 'Noida', ------------------> WRONG
    [cityName]: 'Noida, ------------------> added as (city: 'Noida')
   }

 */