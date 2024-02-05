for(let i = 0;i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    })
}

//output: 0 1 2 3 4 

for(var i = 0;i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    })
}

//output: 5 5 5 5 5 

//To make work for loop with var same as for loop with let, we need to create a closure
for(var i=0;i<5;i++) {
    function inner(index) {
        setTimeout(() => {
            console.log(index);
        })
    }
    inner(i);
}
//output: 0 1 2 3 4 