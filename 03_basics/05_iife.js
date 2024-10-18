// immediately invoked function expressions in js

// why to use?
// //It avoids Polluting the Global Scope
// In JavaScript, variables declared in the global scope (outside of any function or block) remain accessible throughout the code, which can lead to conflicts or unintended behavior when different parts of the code use the same variable names.

// An IIFE helps avoid polluting the global scope by creating a local scope for the variables declared within the function, ensuring that they don’t interfere with other parts of the code.


(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();
//here if you do not use ; in end then error will come ,error for? when u write another iife after this then it will give syntax error.  as these types of functions are invoked but do not know when to stop so use;


( () => {
    //unnamed IIFE
    console.log(`DB CONNECTED TWO`);

})();

//with parameters and arguements

( (salary) => {
    //parameter IIFE
    console.log(`DB CONNECTED TWO ${salary}`);

})(60000);

