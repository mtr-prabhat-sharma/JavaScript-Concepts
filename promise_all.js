const promise1 = new Promise((resolve, reject) => {
    resolve('Promise 1 Resolved !');
})

const promise2 = new Promise((resolve, reject) => {
    reject('Promise 2 Rejected !');
})

const promise3 = new Promise((resolve, reject) => {
    resolve('Promise 3 Resolved !');
})

const res = Promise.all([promise1, promise2, promise3])
.then((res) => {
    console.log("Res",res)
})
.catch((error) => {
    console.log("Error", error);
})

/**
 In this example, Promise.all() waits for all three promises to resolve. 
 Once they all resolve, the .then() callback is executed with an array of the 
 resolved values of the promises. If any promise rejects, the .catch() callback 
 will be executed with the reason of the first rejected promise.
 */