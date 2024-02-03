
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