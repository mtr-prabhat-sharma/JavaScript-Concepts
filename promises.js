//Promise will either resolve or reject
//Promise is used to handle asynchronous operations

let buyIphone = new Promise((resolve, reject) => {
    reject('Something went wrong !');
})

buyIphone.then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
})