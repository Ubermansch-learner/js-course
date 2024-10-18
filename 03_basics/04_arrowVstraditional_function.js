//Immediately invoked function expressions

// const user = {
//     username:"suman",
//     price:299,
//     welcomeMessage: function(){
//         // console.log(`${this.username} , welcome to website`);
//         console.log(this);
//         //since function is inside an object we are able to access username via this keyword
        
//     }
// }

// const chai = function(){
//         let username="suman"
//         console.log(this);
//     }
//     chai();




//+++++++************ this in traditional function vs in arrow function++++++++++**************
// this in a traditional function refers to the calling context, which in this case is the global object (window in browsers, global in Node.js) when called like chai().

// However, in strict mode ("use strict"), this would be undefined when a traditional function is called without an object context.

// If you're not in strict mode, the output would show the global object





// ###################in arrow functions######################

// this in an arrow function does not refer to the calling context. Instead, it inherits the this value from its surrounding lexical context (i.e., the context in which the function is defined).

// In this case, since the arrow function is defined in the global context (outside of any object or class), this refers to the global scope in browsers (which is an empty object {}

    const chai = () => {
        let username ="suman"
        // console.log(this.username);//undefined
        console.log(this)//{} 
    }
    chai()
