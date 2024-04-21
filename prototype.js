/**
 * Prototype is an hidden object that is associated with every functions, objects and arrays.
 * In JavaScript, every object has a prototype. When you access a property or method on an 
   object, JavaScript first looks for that property or method directly on the object. If it 
   doesn't find it, it looks at the object's prototype and continues up the prototype chain 
   until it finds the property or method or reaches the end of the chain.

 * Refer prototype.html
 */

let obj1 = {
    name: 'Jhon',
    age: 21,
    city: 'Los Angeles',
    greet: function() {
        console.log(`Hello ${this.name} from ${this.city}`)
    }
}

let obj2 = {
    name: "prabhat"
}

obj2.__proto__ = obj1;
console.log(obj2.greet());


