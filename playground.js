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

// let arr = [2,3,4,5,6,7];
// const res = arr.map((ele) => {
//     return ele * 2;
// })
// console.log(arr);
// console.log(res);



// const LoggingService = (function () {
//     const infoMessage = 'Information';
//     const warnMessage = 'Warning';
//     const errorMessage = 'Error';
    
//     return {
//         info: function (str) {
//             console.log(`${infoMessage}${str}`);
//         },
//         warning: function (str) {
//             console.log(`${warnMessage}${str}`);
//         },
//         error: funciton (str) {
//             console.log(`${errorMessage}${str}`)
//         },
        
//     };
// })()

// LoggingService.info('one');



// function demo(arr,k) {
//     let newArr = arr.splice(0,k+1);
//     //console.log(newArr) //1,2,3,4
//    // console.log(arr) //5,6,7
//     let arr2 = [];
//     for(let i=newArr.length-1;i>=0;i--) {
//         //console.log(newArr[i])
//         arr2.push(newArr[i]);
//     }
//     let res = [...arr,...arr2];
//     console.log(res);
// }
// demo([1,2,3,4,5,6,7], 3);

// function union(arr1, arr2) {
//     const res = [...new Set([...arr1, ...arr2])].sort();
//     console.log(res);
// }

// union([4,3,6,9,2,7], [8,2,1,7,9])

// function intersection(arr1, arr2) {
//     let res = [];
//     for(let i=0;i<arr1.length;i++) {
//         for(let j=0;j<arr2.length;j++) {
//             if(arr1[i] === arr2[j] ) {
//                 res.push(arr1[i]);
//             }
//         }
//     }
//     console.log(res);
// }

// intersection([4,3,6,9,2,7], [8,2,1,7,9])

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1 rejected !");
//     }, 1000)
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 2 resolved !");
//     }, 2000)
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 3 resolved !");
//     }, 3000)
// });

// const res = Promise.all([promise1, promise2, promise3]);
// res.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

const obj = [
    {
      name: "a",
      children: [
        {
          name: "b",
          children: [
            {
              name: "c",
              children: null
            }
          ]
        },
        {
          name: "d",
          children: null
        }
      ]
    },
    {
      name: "e",
      children: null
    }
  ];
  function getPaths(obj, path = '') {
    const result = [];
    
    for (const item of obj) {
      const newPath = path ? `${path}.${item.name}` : item.name;
      console.log(path)
      if (item.children !== null && item.children.length > 0) {
        result.push(...getPaths(item.children, newPath));
      } else {
        result.push(newPath);
      }
    }
    
    return result;
  }
  console.log(getPaths(obj));
  