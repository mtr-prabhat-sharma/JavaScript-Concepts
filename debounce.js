// debouncing me jab user type karna band kar dega uske kuch second baad function run hoga

//throttling me  time fixed rehta hai or us time ke baad function run ho jata fir bhale hi user kuch type kare na kare
var counter = 0;
function getData() {
    console.log("getting data", counter++);
}

const debounceFun = (fn, d) => {
    let timer;
    return function(...args) { // it will take values as arguments given my user in the input
        if(timer) clearTimeout(timer);
        setTimeout(() => {
            fn();
        }, d)
    }
}
const myFun = debounceFun(getData, 1000);