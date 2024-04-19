/*
 1. We can create the object of classes but abstract classes cannot be instantiated 
    directly.
 2. If a class contains at least 1 abstract methods(method without body) are knowm as
    abstract classes.
 3. Abstract classes are used only for inheritance so that we can define the abstract
    method inside child classes.
 4. Abstract classes are acts as a base class for other classes.
 */

 // Simple Class
 class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }

  //Abstract class example
  abstract class Shape {
    constructor(color) {
      this.color = color;
    }
  
    abstract draw();
  }

  class Circle extends Shape {
    constructor(color, radius) {
      super(color);
      this.radius = radius;
    }
  
    draw() {
      console.log(`Drawing a circle with a radius of ${this.radius} and a color of ${this.color}.`);
    }
  }