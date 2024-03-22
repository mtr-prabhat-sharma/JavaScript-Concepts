const promise1 = new Promise((resolve, reject) => {
    resolve('Promise 1 Resolved !');
})

const promise2 = new Promise((resolve, reject) => {
    reject('Promise 2 Rejected !');
})

const promise3 = new Promise((resolve, reject) => {
    resolve('Promise 3 Resolved !');
})

const res = Promise.allSettled([promise1, promise2, promise3])
.then((res) => {
    console.log("Res",res)
})
.catch((error) => {
    console.log("Error", error);
})

/**
 Res [
  { status: 'fulfilled', value: 'Promise 1 Resolved !' },
  { status: 'rejected', reason: 'Promise 2 Rejected !' },
  { status: 'fulfilled', value: 'Promise 3 Resolved !' }
]
 */
/**
 Promise.allSettled() waits for all three promises to settle. 
 Once they all settle, the .then() callback is executed with an array of objects 
 representing the outcome of each promise.
 */