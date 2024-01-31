// class Animal {
//     constructor(numberOfLegs, weight) {
//         this.numberOfLegs = numberOfLegs;
//         this.weight = weight;
//     }
// }

// class Insect extends Animal {
//     countLegs() {
//         console.log(`This insect has ${this.numberOfLegs} legs.`);
//     }
// }

// let fly = new Insect(6, .045);
// console.log(fly);

// class Animal {
//     constructor() {
//         console.log("Hi from Constructor !");
//     }
//     greet() {
//         console.log("Hi from GREET !");
//     }
// }

// let dog = new Animal();
// console.log(dog.greet());

// class Animal {
//     constructor(name, color) {
//         this.name = name;
//         this.color = color;
//     }
// }

// class Dog extends Animal {
//     constructor(name, color, behaviour) {
//         super(name, color);
//         this.behaviour = behaviour;
//     }

//     dogNature() {
//         console.log(`Dog name is ${this.name}, color is ${this.color} and its behaviour ${this.behaviour}`);
//     }
// }

// let obj = new Dog('Pug', 'white', 'calm');
// obj.dogNature();
// console.log(obj)

// class Animal {
//     static totalAnimals = 0;
//     constructor(name) {
//         this.name = name;
//         Animal.totalAnimals++;
//     }

//     static getTotalAnimals() {
//         return Animal.totalAnimals;
//     }
// }

// let animal = new Animal('Lion');
// console.log(Animal.totalAnimals);
// console.log(Animal.getTotalAnimals());

let arr = [2,3,4,5,6,7];
const res = arr.map((ele) => {
    return ele * 2;
})
console.log(arr);
console.log(res);