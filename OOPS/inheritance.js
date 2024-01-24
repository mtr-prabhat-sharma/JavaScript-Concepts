/**
 * In Javascript, Inheritance refers to the passing down the properties and methods that are defined in the parent class
   to the child class.
 * 
 */

class Animal {
    constructor(tyoeOfAnimal, weight) {
        this.tyoeOfAnimal = tyoeOfAnimal;
        this.weight = weight;
    }

    animalProperty() {
        console.log(`Your animal is a ${this.tyoeOfAnimal}, its name is ${this.name} and its weight is ${this.weight} pounds`);
    }
}

class Dog extends Animal {
    
        constructor(tyoeOfAnimal, weight, name) {
            super(tyoeOfAnimal,weight);
            this.name = name;
        }
    
}

let dog = new Dog('Dog', 43, 'jack');
dog.animalProperty(); //output: Your animal is a Dog, its name is jack and its weight is 43 pounds