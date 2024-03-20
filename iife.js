//IIFE - Immediately Invoked functions expression or self invoking functions is a
// nameless (anonymous) function that is invoked immediately after its definition.

(function(){
    console.log("This function is called immediately");
})();

(function(){
    var foo = 10;
    console.log(foo); // 10
})();

console.log(foo); //ReferenceError: foo is not defined