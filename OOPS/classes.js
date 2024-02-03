/**
 * Classes are blueprint or templates for creating objects in javascript
 * Classes can be used to create objects.
 * We use  CONSTRUCTOR inside class, because constructor calls automatically when the instance (object) of class is created.
 */

class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    animalProperty() {
        console.log(`Your animal is ${this.name} and its weight is ${this.weight} pounds`);
    }
}

const dog = new Animal('Dog','40');
const cat = new Animal('Cat','30');
dog.animalProperty();
cat.animalProperty();

/**
 * Class with static properties and methods.
 * To call static property and static method there is no need to create the instance 
    of class, we can call them directly using class name.
 */


class Store {
    static bufferStock = 1000;
    constructor(soldStock) {
        this.soldStock = soldStock;
    }

    static leftStock(soldStock) {
        console.log(`Left stock = ${this.bufferStock - soldStock}`);

    }
}

let store = new Store(200);
Store.leftStock(store.soldStock); //calling directly using class name.

/* .................................. ANOTHER WAY .................................... */

class NewStore {
    static bufferStock = 1000;
    static soldStock = 350;

    static leftStock() {
        console.log(`Left stock = ${this.bufferStock - this.soldStock}`);

    }
}

//let newStore = new NewStore(200);
NewStore.leftStock(); //Output: Left stock = 650