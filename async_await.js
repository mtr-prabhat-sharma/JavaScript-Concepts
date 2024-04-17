
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved !')
    },3000)
})

async function demo() {
    let res = await promise;
    console.log(res);
}

demo();

//How to get the data from the below function without using .then() or using await.
async function greeting() {
    return "Hello User";
}
//solution
async function getResult() {
    let res = await greetings();
    console.log(res);//Hello User
}
getResult();