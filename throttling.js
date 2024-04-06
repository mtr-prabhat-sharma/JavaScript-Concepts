
const myThrottle = (fn, d) => {
    return function(...args) {
        document.getElementById('throttling_button').disabled = true;
        console.log('args', args);
        setTimeout(() => {
            fn();
        }, d)
    }
}

const throttleFun = myThrottle(() => {
    document.getElementById('throttling_button').disabled = false;
    console.log("User Clicked !")
}, 3000)